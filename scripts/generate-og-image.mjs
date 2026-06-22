/**
 * Genera /public/og-image.jpg (1200x630) para Open Graph / Twitter Card.
 * Ejecutar: node scripts/generate-og-image.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "..", "public", "og-image.jpg");

const W = 1200;
const H = 630;

const C_PETROLEO     = "#0F2D3A";
const C_ACERO        = "#1F5C73";
const C_EDITORIAL    = "#F5F7F9";
const C_QUIRURGICO   = "#4A90A4";
const C_DORADO       = "#B8A36A";
const C_GRIS_PREMIUM = "#7B8790";

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${C_PETROLEO};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${C_ACERO};stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Fondo -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Barra lateral dorada -->
  <rect x="0" y="0" width="8" height="${H}" fill="${C_DORADO}"/>

  <!-- Nombre -->
  <text x="80" y="195"
    font-family="Arial, Helvetica, sans-serif"
    font-size="56"
    font-weight="bold"
    fill="${C_EDITORIAL}">Dr. Alejandro Quiroz Compe&#225;n</text>

  <!-- Especialidad -->
  <text x="80" y="262"
    font-family="Arial, Helvetica, sans-serif"
    font-size="30"
    font-weight="bold"
    fill="${C_QUIRURGICO}">Ur&#243;logo Onc&#243;logo &#183; Cirug&#237;a Rob&#243;tica</text>

  <!-- Ciudad -->
  <text x="80" y="312"
    font-family="Arial, Helvetica, sans-serif"
    font-size="22"
    fill="${C_GRIS_PREMIUM}">Le&#243;n, Guanajuato &#183; M&#233;xico</text>

  <!-- Separador dorado -->
  <rect x="80" y="340" width="220" height="2" fill="${C_DORADO}"/>

  <!-- Dominio -->
  <text x="80" y="397"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20"
    fill="${C_DORADO}">urologiaroboticaleon.com</text>

  <!-- Credenciales -->
  <text x="80" y="452"
    font-family="Arial, Helvetica, sans-serif"
    font-size="17"
    fill="${C_EDITORIAL}"
    opacity="0.5">INCan &#183; INCMNSZ &#183; Hospital Albert Einstein, Brasil &#183; CONAMEU</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(OUTPUT);

console.log("✅ og-image.jpg generado en:", OUTPUT);
