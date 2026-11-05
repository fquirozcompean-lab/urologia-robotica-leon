// Verifica que el FAQ schema de cada page.tsx sea idéntico a las FAQs visibles de su
// *Content.tsx (preguntas y respuestas). Regla de CLAUDE.md: "FAQ schema SIEMPRE sincronizado".
//   node scripts/check-faq-sync.mjs        → reporta; exit 1 si hay diferencias
//   node scripts/check-faq-sync.mjs --fix  → reescribe el schema usando el texto visible
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const FIX = process.argv.includes("--fix");
const APP = "src/app";
const KEYS_Q = new Set(["q", "question", "pregunta"]);
const KEYS_A = new Set(["a", "answer", "respuesta", "r"]);

const parse = (file) =>
  ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const norm = (s) => s.replace(/\s+/g, " ").trim();
const keyName = (p) => (p.name && (ts.isIdentifier(p.name) || ts.isStringLiteralLike(p.name)) ? p.name.text : null);

// Texto como lo renderiza React: JsxText colapsa saltos de línea; {" "} aporta el espacio.
function jsxText(node) {
  if (ts.isJsxText(node)) {
    const lines = node.text.split(/\r?\n/);
    return lines
      .map((l, i) => {
        let t = l.replace(/\t/g, " ");
        if (i > 0) t = t.replace(/^ +/, "");
        if (i < lines.length - 1) t = t.replace(/ +$/, "");
        return t;
      })
      .filter((t, i) => t !== "" || i === lines.length)
      .join(" ")
      .replace(/&nbsp;/g, " ")
      .replace(/&ldquo;|&rdquo;|&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<");
  }
  if (ts.isJsxExpression(node)) return node.expression ? jsxText(node.expression) : "";
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isJsxElement(node)) return node.children.map(jsxText).join("");
  if (ts.isJsxFragment(node)) return node.children.map(jsxText).join("");
  if (ts.isParenthesizedExpression(node)) return jsxText(node.expression);
  if (ts.isJsxSelfClosingElement(node)) return "";
  return `«${node.getText().slice(0, 30)}»`; // expresión que no se puede resolver estáticamente
}

function visibleFaqs(file) {
  const out = [];
  const sf = parse(file);
  (function walk(n) {
    if (ts.isJsxElement(n)) {
      const attr = n.openingElement.attributes.properties.find(
        (a) => ts.isJsxAttribute(a) && KEYS_Q.has(a.name.getText())
      );
      // q={item.q} viene de un arreglo: ese arreglo ya se recoge abajo como objeto literal.
      if (attr && attr.initializer && !jsxText(attr.initializer).includes("«")) {
        const q = jsxText(attr.initializer);
        out.push({ q: norm(q), a: norm(n.children.map(jsxText).join("")) });
        return;
      }
    }
    if (ts.isObjectLiteralExpression(n)) {
      const props = n.properties.filter(ts.isPropertyAssignment);
      const pq = props.find((p) => KEYS_Q.has(keyName(p)));
      const pa = props.find((p) => KEYS_A.has(keyName(p)));
      if (pq && pa && ts.isStringLiteralLike(pq.initializer)) {
        out.push({ q: norm(pq.initializer.text), a: norm(jsxText(pa.initializer)) });
        return;
      }
    }
    ts.forEachChild(n, walk);
  })(sf);
  return out;
}

function schemaFaqs(file) {
  const sf = parse(file);
  let arr = null;
  (function walk(n) {
    if (arr) return;
    if (ts.isObjectLiteralExpression(n)) {
      const props = n.properties.filter(ts.isPropertyAssignment);
      const isFaq = props.some((p) => keyName(p) === "@type" && p.initializer.getText().includes("FAQPage"));
      const me = props.find((p) => keyName(p) === "mainEntity");
      if (isFaq && me && ts.isArrayLiteralExpression(me.initializer)) {
        arr = me.initializer;
        return;
      }
    }
    ts.forEachChild(n, walk);
  })(sf);
  if (!arr) return null;
  const items = arr.elements.map((el) => {
    const props = el.properties.filter(ts.isPropertyAssignment);
    const name = props.find((p) => keyName(p) === "name");
    const ans = props.find((p) => keyName(p) === "acceptedAnswer");
    const text = ans.initializer.properties.filter(ts.isPropertyAssignment).find((p) => keyName(p) === "text");
    return { q: norm(name.initializer.text), a: norm(text.initializer.text) };
  });
  return { items, start: arr.getStart(sf), end: arr.getEnd() };
}

function pages(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const d = path.join(dir, e.name);
    const page = path.join(d, "page.tsx");
    const content = fs.readdirSync(d).find((f) => /Content\.tsx$/.test(f));
    if (fs.existsSync(page) && content) acc.push({ name: path.relative(APP, d), page, content: path.join(d, content) });
    pages(d, acc);
  }
  return acc;
}

let diffs = 0;
for (const p of pages(APP)) {
  const schema = schemaFaqs(p.page);
  if (!schema) continue;
  const visible = visibleFaqs(p.content);
  const unresolved = visible.filter((v) => v.a.includes("«"));
  const sameQ = schema.items.filter((s) => visible.some((v) => v.q === s.q));
  const sameA = schema.items.filter((s) => visible.some((v) => v.q === s.q && v.a === s.a));
  const ok = schema.items.length === visible.length && sameA.length === visible.length;
  if (ok) {
    console.log(`ok       ${p.name} (${visible.length})`);
    continue;
  }
  diffs++;
  console.log(
    `DIFIERE  ${p.name}: schema ${schema.items.length}, visible ${visible.length}, ` +
      `preguntas iguales ${sameQ.length}, respuestas iguales ${sameA.length}` +
      (unresolved.length ? `, NO RESUELTAS ${unresolved.length}` : "")
  );
  if (FIX) {
    if (unresolved.length || !visible.length) {
      console.log(`  → omitida en --fix: revisar a mano`);
      continue;
    }
    const src = fs.readFileSync(p.page, "utf8");
    const body = visible
      .map(
        (v) =>
          `    {\n      "@type": "Question",\n      name: ${JSON.stringify(v.q)},\n      acceptedAnswer: {\n` +
          `        "@type": "Answer",\n        text: ${JSON.stringify(v.a)},\n      },\n    },`
      )
      .join("\n");
    fs.writeFileSync(p.page, src.slice(0, schema.start) + "[\n" + body + "\n  ]" + src.slice(schema.end));
    console.log(`  → schema reescrito con ${visible.length} FAQs visibles`);
  }
}
console.log(diffs ? `\n${diffs} página(s) con diferencias` : "\nTodo sincronizado");
if (diffs && !FIX) process.exit(1);
