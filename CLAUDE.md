# Urología Robótica León — Contexto del proyecto

## El médico
**Dr. Alejandro Quiroz Compeán** — Urólogo oncólogo en León, Guanajuato.
- Alta especialidad en Urología Oncológica: Instituto Nacional de Cancerología (INCan)
- Posgrado en Cirugía Robótica: Hospital Israelita Albert Einstein, São Paulo, Brasil
- Certificado por CONAMEU
- Cédula Profesional: 8860892 | Cédula Especialidad: 12465195
- Aviso de Publicidad COFEPRIS: **2611072002A00152** (ya actualizado en todas las páginas)

## Consultorios
| Hospital | Consultorio | Días |
|---|---|---|
| Hospital Ángeles León | 615, Torre II | Lun / Mar / Jue |
| Hospital Christus Muguerza Altagracia | 724 | Mié / Vie |

## Contacto y links clave
- **WhatsApp:** `5214776330492` → `https://wa.me/5214776330492`
- **Doctoralia:** `https://www.doctoralia.com.mx/z/oFar6h`
- **Instagram:** `https://www.instagram.com/urologo.alejandroquiroz/`
- **Facebook:** `https://www.facebook.com/DrQuirozUrologoLeon`
- **Dominio:** `https://urologiaroboticaleon.com`

## Stack técnico
- **Framework:** Next.js 16 (App Router) + Vercel
- **Estilos:** Tailwind CSS v4 con tokens custom definidos en `globals.css`
- **Fuentes:** Plus Jakarta Sans (`font-sans`) + Lora (`font-serif`)
- **Iconos:** lucide-react
- **Animaciones:** framer-motion (solo en páginas interiores)
- **Analytics:** Google Analytics G-FFEFH848TS

## Tokens de diseño (globals.css)
```
--color-petroleo:    #0F2D3A  ← fondo principal / navbar / footer
--color-acero:       #1F5C73  ← azul secundario / bordes activos
--color-editorial:   #F5F7F9  ← texto sobre fondo oscuro / fondo claro
--color-gris-premium:#7B8790  ← textos secundarios (solo sobre fondos OSCUROS)
--color-gris-profundo:#37474F ← textos cuerpo (usar sobre fondos claros — 7.7:1 sobre editorial)
--color-quirurgico:  #4A90A4  ← acento teal / iconos (solo decorativo, NO para texto sobre fondos claros)
--color-dorado:      #B8A36A  ← detalles premium / divisores

-- UTILIDAD (no es parte de la paleta de marca médica) --
--color-whatsapp:    #15803d  ← exclusivo para botones WA (5.01:1 con texto blanco, WCAG AA)
                               No usar en contenido editorial ni UI general
```
Clases: `bg-petroleo`, `text-editorial`, `bg-acero`, `text-quirurgico`, `text-dorado`, `bg-whatsapp`, etc.

### Reglas de contraste WCAG AA (aprendidas en auditoría)
- `text-gris-premium` sobre fondos CLAROS (`bg-white`, `bg-editorial`): FALLA (3.42:1). Usar `text-gris-profundo`.
- `text-gris-premium` sobre `bg-petroleo`: borderline (3.91:1). Usar `text-editorial/65` o superior.
- `text-quirurgico` sobre fondos claros: FALLA (3.61:1). Usar `text-acero` para links/texto.
- `text-quirurgico` es correcto como color de icono (no-texto) o bullet decorativo.
- Botones WA: usar `bg-whatsapp` (nunca `bg-[#25D366]` que da 1.98:1 con texto blanco).

## Arquitectura de componentes
```
src/
├── components/
│   ├── Navbar.tsx          ← navbar global fija (bg-petroleo), WA verde + link Segunda Opinión (dorado)
│   ├── Footer.tsx          ← footer global (bg-petroleo, 5 cols + COFEPRIS)
│   │                          Col. "Especialidades": links sitewide a las 4 páginas
│   │                          prioritarias (próstata, HoLEP, renal, segunda opinión)
│   ├── ServiceCard.tsx     ← tarjeta de especialidad con link
│   ├── WAButton.tsx        ← botón WA directo con tracking GA4 (prop telefono obligatoria de facto)
│   ├── WAButtonConSelector.tsx ← botón idéntico a WAButton pero abre SedeSelector (CTAs genéricos)
│   ├── WASelectorLink.tsx  ← reemplazo drop-in de anchors inline: conserva children, abre SedeSelector
│   ├── SedeSelector.tsx    ← modal de elección de sede (portal, Escape/overlay/X, focus trap)
│   ├── CallButton.tsx      ← botón tel: con tracking GA4 (sede)
│   └── FloatingWhatsApp.tsx ← botón WA flotante global → abre SedeSelector
├── app/
│   ├── layout.tsx          ← inyecta Navbar + Footer + pt-16 spacer
│   ├── page.tsx            ← home (Server Component, metadata propia)
│   ├── cancer-prostata/
│   │   ├── page.tsx        ← Server Component: metadata + JSON-LD
│   │   └── CancerProstataContent.tsx  ← Client Component ('use client')
│   └── [otras rutas con el mismo patrón page.tsx + Content.tsx]
```

## Patrón para páginas nuevas
Cada ruta interior sigue este patrón de dos archivos:
1. `page.tsx` — Server Component: exporta `metadata` (title, description, keywords, OG, canonical) + JSON-LD schemas
2. `*Content.tsx` — Client Component (`'use client'`): toda la UI con framer-motion

**El layout ya provee navbar y footer — NO crearlos dentro del Content.**
**El layout ya agrega `pt-16` — NO añadir `pt-20` al `<main>`.**

## Reglas de accesibilidad — headings (WCAG 2.4.6)
La jerarquía de headings no puede saltar niveles (h1→h3 sin h2, o h3→h5, etc.).
Orden correcto en cada página:
- `h1` — título principal de la página (uno solo)
- `h2` — secciones principales de la página (pueden ser varios)
- `h3` — sub-secciones dentro de un h2
- Footer usa `h3` para sus columnas (nunca h4 — saltaría nivel)

**El tamaño visual y el nivel semántico son independientes.** Un h2 puede llevar
`text-[15px]` si semánticamente es una sección de primer nivel. Usar Tailwind para
el estilo, HTML semántico para la jerarquía.

Ejemplo corregido en HomeContent.tsx: las tarjetas de "Consultas frecuentes" aparecen
antes del primer h2 de sección, por lo que deben ser h2 aunque sean visualmente pequeñas.

## Reglas de performance (aprendidas en auditoría Lighthouse)

### JSON-LD schemas
- ✅ Usar `<script type="application/ld+json" dangerouslySetInnerHTML={...} />` nativo de React
- ❌ NUNCA usar `<Script>` de next/script para JSON-LD, con NINGUNA strategy:
  - `beforeInteractive` bloquea render 2,470 ms
  - `afterInteractive` (default) inyecta post-hidratación → crawlers sin JS no ven el schema
    (bug encontrado y corregido en /segunda-opinion-oncologica, Jul 2026)
- El componente `<Script>` (next/script) solo es válido para JS externo con lifecycle (GA, chat widgets, etc.)
- **FAQ schema SIEMPRE sincronizado con las FAQs visibles del Content**: mismas preguntas,
  mismos textos (requisito de Google para rich results). Al agregar/editar una FAQ en el
  Content, actualizar el faqSchema del page.tsx en la misma tarea. (En /holep el schema
  exponía 5 de 17 FAQs ya escritas — corregido Jul 2026.)

### Imágenes
- ✅ Siempre usar `<Image>` de `next/image` (genera WebP/AVIF, srcset, lazy automático)
- ✅ El LCP element de cada página DEBE tener `priority` (Navbar + hero son siempre LCP)
- ✅ Incluir `sizes` para imágenes responsive: `sizes="(max-width: 1024px) 90vw, 45vw"`
- ❌ NUNCA usar `<img>` nativo para imágenes de contenido (solo SVGs inline justifican `<img>`)
- Imágenes >500 KB deben re-exportarse en WebP antes de subir a `/public`

### Lighthouse — cómo correr sin falsos positivos
Siempre correr con extensiones deshabilitadas. Kaspersky y ad-blockers inyectan JS/CSS propios
que Lighthouse reporta como "unused" del sitio (251 KB CSS y 162 KB JS eran 100% de Kaspersky/uBlock).
Comando correcto:
```
npx lighthouse https://urologiaroboticaleon.com/ --output=json \
  --output-path="C:\Users\aqc_a\lh-report.json" \
  --chrome-flags="--headless --no-sandbox --disable-extensions --disable-gpu" \
  --only-categories=performance,accessibility,best-practices,seo
```

## Páginas existentes
| Ruta | Archivo |
|---|---|
| `/` | `app/page.tsx` |
| `/cancer-prostata` | `app/cancer-prostata/` |
| `/cancer-renal` | `app/cancer-renal/` |
| `/cancer-vejiga` | `app/cancer-vejiga/` |
| `/hiperplasia-prostatica-benigna` | `app/hiperplasia-prostatica-benigna/` |
| `/holep-cirugia-laser` | `app/holep-cirugia-laser/` |
| `/calculos-renales` | `app/calculos-renales/` |
| `/disfuncion-erectil` | `app/disfuncion-erectil/` |
| `/infeccion-urinaria` | `app/infeccion-urinaria/` |
| `/medicamentos-prostata` | `app/medicamentos-prostata/` |
| `/vph-en-hombres` | `app/vph-en-hombres/` |
| `/verrugas-genitales` | `app/verrugas-genitales/` |
| `/sobre-mi` | `app/sobre-mi/` |
| `/segunda-opinion-oncologica` | `app/segunda-opinion-oncologica/` |
| `/cancer-testicular` | `app/cancer-testicular/` |
| `/pet-psma-leon` | `app/pet-psma-leon/` |
| `/resonancia-magnetica-prostata` | `app/resonancia-magnetica-prostata/` |
| `/hematuria` | `app/hematuria/` |
| `/uroflujometria-leon` | `app/uroflujometria-leon/` (estudio — sub-página, sin card en home) |
| `/que-es-la-prostata` | `app/que-es-la-prostata/` (pilar informativo — card en home Cat. 2) |
| `/prostatitis` | `app/prostatitis/` |
| `/que-es-el-rinon` | `app/que-es-el-rinon/` (pilar informativo renal — card en home Cat. 3) |
| `/dolor-de-rinon` | `app/dolor-de-rinon/` (síntoma — card en home Cat. 3) |
| `/agendar` | `app/agendar/` |
| `/gracias` | `app/gracias/` (noindex — post-conversión, NO va en sitemap) |
| `/aviso-de-privacidad` | `app/aviso-de-privacidad/` |
| `/en/international-patients` | `app/en/international-patients/` (única página en inglés) |

## Arquitectura de Información — Categorías de Especialidades (Junio 2026)

### Decisión
El sitio creció de 12 a 14+ páginas sin una arquitectura de categorías, lo que
generó páginas huérfanas sin acceso desde el home (caso: /cancer-vejiga y
/cancer-testicular no tenían ningún link desde la página principal).

A partir de esta fecha, TODA página nueva de condición/especialidad debe
clasificarse en una de las siguientes categorías y añadirse a su bloque
correspondiente en la sección "Especialidades" del home (`src/app/HomeContent.tsx`):

**Categoría 1 — Oncología Urológica** ← acento dorado
Cáncer de próstata, renal, vejiga, testicular, y cualquier futura página
oncológica (ej. biopsia de fusión). La página /segunda-opinion-oncologica
recibe tratamiento especial como banda destacada dentro de esta categoría, no
como card individual más.

**Excepción documentada (Jul 2026):** las páginas de **estudios/técnicas** son
sub-páginas de su hub, NO condiciones: no llevan card en el home, se acceden desde
links dentro de las páginas clínicas relacionadas.
- /pet-psma-leon y /resonancia-magnetica-prostata → hub /cancer-prostata (PET-PSMA
  desde su sección y FAQ; la RM desde la sección de diagnóstico).
- /uroflujometria-leon → hub de próstata benigna: enlazada desde
  /hiperplasia-prostatica-benigna (sección de diagnóstico) y /medicamentos-prostata
  (sección de uroflujometría). Enlaza a HPB, HoLEP, cáncer de próstata y cálculos.

Este es el patrón para futuras páginas de estudios/técnicas que pertenecen a un hub
(ver checklist).

**Categoría 2 — Próstata (no oncológica)** ← acento quirurgico
HPB, HoLEP, medicamentos para próstata, y futuras páginas relacionadas con
próstata benigna.

**Categoría 3 — Salud Sexual y Urológica General** ← acento quirurgico
Disfunción eréctil, VPH, verrugas genitales, infección urinaria, y futuras
condiciones de salud sexual o urológica general.

**Categoría 4 — Riñón y Vías Urinarias** ← acento quirurgico (implementada Jul 2026)
Pilar /que-es-el-rinon, dolor de riñón, cálculos renales, hematuria, y futuras
páginas renales/de vías urinarias NO oncológicas. El cáncer renal permanece en
Categoría 1 (Oncología). Se creó al separar el clúster renal de la Cat. 3, que
había llegado a 8 cards.

**Categoría 5 — Recursos y Educación (futura, aún sin implementar)**
Reservada para cuando se active el blog (Fase 3 del roadmap). No crear esta
sección en el home todavía.

### Checklist obligatorio para páginas nuevas
Este es el checklist ÚNICO y completo. Una página nueva no está terminada hasta
cumplir los 8 puntos (los huecos de este checklist causaron todas las páginas
huérfanas y schemas rotos corregidos en Jun-Jul 2026):

1. **Clasificar:** ¿es condición/especialidad (→ card en el home, en su categoría)
   o sub-página de un hub (estudios/técnicas, ej. /pet-psma-leon → sin card, pero
   con link visible desde su hub)?
2. **Links entrantes:** además del home o hub, linkearla desde al menos UNA página
   clínicamente relacionada. Ninguna página puede quedar accesible solo desde el
   sitemap. Validar coherencia médica de cada cross-link (ej. NO renal→PET-PSMA).
3. **Cross-link a /segunda-opinion-oncologica** SI es condición oncológica.
4. **sitemap.ts** actualizado.
5. **JSON-LD:** `<script>` nativo (nunca next/script) y **FAQ schema idéntico a
   las FAQs visibles del Content** — misma lista, mismos textos.
6. **Reglas editoriales aplican también a metadata:** title, description, keywords,
   OG y schemas siguen las mismas prohibiciones que el contenido visible.
7. **Actualizar la tabla "Páginas existentes"** de este archivo en la misma tarea.
8. **Evaluar dropdown del navbar** si una categoría supera 5-6 páginas.

### Interlinking estratégico (Julio 2026)
Fortalecimiento de las 4 páginas prioritarias (HoLEP, cáncer de próstata,
cáncer renal, segunda opinión) en 3 fases:
- **Fase 1 — links internos:** columna "Especialidades" en el Footer con las 4
  páginas prioritarias (links sitewide); HBP → HoLEP dentro de la tarjeta del
  tratamiento; medicamentos-prostata → HoLEP como CTA primario en Alternativas;
  cancer-vejiga ↔ cancer-renal recíproco.
- **Fase 2 — SEO técnico:** FAQ schema de HoLEP sincronizado 5→17; schemas
  MedicalCondition/MedicalWebPage enriquecidos en próstata; fix de `<Script>`
  → `<script>` nativo en segunda opinión.
- **Fase 3 — contenido:** próstata 7→11 FAQs; segunda opinión 8→10 FAQs.

Regla derivada: al crear cross-links entre páginas clínicas, validar coherencia
médica (ej. NO linkear cáncer renal → PET-PSMA: el PSMA es específico de próstata).

### Pendiente de evaluar
- **Reorganización Cat. 3 → resuelta (Jul 2026):** se creó la Categoría 4 "Riñón y
  Vías Urinarias" moviendo cálculos, hematuria, ¿qué es el riñón? y dolor de riñón;
  Cat. 3 quedó con disfunción, VPH, verrugas e infección (4 cards). El home ahora
  tiene 4 categorías clínicas de ~4 cards cada una.
- Cuando se agregue contenido de medicamentos urológicos generales o el blog,
  reevaluar el navbar "Especialidades" como menú desplegable (hoy son 4 categorías;
  un dropdown por categoría sería el siguiente paso natural si crecen).

## Reglas editoriales / médico-legales
- ❌ NO usar: "el mejor", "garantizado", "100% seguro", "cura definitiva"
- ❌ NO prometer resultados clínicos individuales
- ✅ SÍ usar: "basado en evidencia científica", "en la mayoría de los pacientes", "con intención curativa"
- ✅ El CTA primario siempre debe ir a **WhatsApp**, no a Doctoralia
- ✅ Doctoralia va como CTA secundario o en el footer
- **Alcance:** estas reglas aplican a TODO el output indexable, no solo al contenido
  visible: metadata (title, description, keywords), OG/Twitter cards y schemas
  JSON-LD. (Caso corregido Jul 2026: keyword "mejor cirugia prostata grande" en
  metadata de /holep.)
- **Búsquedas de "remedios naturales / suplementos / ajo para X":** son de alto
  volumen pero NO se atienden promoviendo remedios sin evidencia (choca con COFEPRIS
  y con la credibilidad del médico). Se capturan con **marco de evidencia**: una
  sección tipo "mitos vs. evidencia" que responde con honestidad (qué no funciona y
  qué sí) y redirige a evaluación real. (Aplicado Jul 2026 en /que-es-la-prostata,
  sección "¿Qué es bueno para la próstata? Evidencia y mitos".)

## Jerarquía de especialidades para SEO
1. Cáncer de próstata (hub principal)
2. HoLEP / crecimiento prostático (+750% búsquedas — máxima prioridad de crecimiento)
3. Disfunción eréctil + tadalafil (+950% en tadalafil, alto volumen)
4. Infección urinaria (+110%, volumen alto)
5. Cáncer renal / Cáncer de vejiga
6. VPH en hombres / Verrugas genitales
7. Cálculos renales
8. Cirugía robótica — NO usar como keyword principal (volumen bajo, -10% decreciente). Mencionar únicamente dentro de las páginas anteriores como técnica, nunca como página o keyword objetivo propia.

## Imágenes disponibles en /public/images/
- `foto-para-web.png` — foto principal del Dr. (hero home)
- `dr-quiroz-profesional.jpg` — foto profesional alternativa
- `foto con davinci.jpg` — con consola robótica Da Vinci
- `Foto atras davinci.jpg` — atrás del sistema Da Vinci

## Estado de seguridad (npm audit)

Última revisión: **Julio 2026**.

| Fecha | Antes | Después | Acción |
|---|---|---|---|
| Jul 2026 | 6 (5 high, 1 critical) | 17 high, **0 critical** | `npm audit fix` (no-breaking, solo `package-lock.json`) |

**Resuelto por el fix no-breaking** (dentro de rangos semver, package.json intacto):
- `tar` 7.5.16 → 7.5.22 — **critical eliminada** (node-tar DoS/crash)
- `js-yaml` 4.2.0 → 4.3.0
- `postcss` (de Tailwind) 8.5.15 → 8.5.23
- `next` 16.2.9 → **16.2.12** (patch, es el `latest` estable)

**Pendiente — sin fix no-breaking disponible.** Las 17 high restantes NO son
regresión: el número subió de 6 a 17 porque, al quitar tar/js-yaml, npm re-expande
la cadena transitiva de eslint. Son dos raíces, ambas solo corregibles con cambios
breaking (por eso `npm audit fix` se detuvo aquí):

1. **Next.js + postcss/sharp embebidos.** `next@16.2.12` es el último estable; el
   parche de estos avisos está en **16.3.0** (aún en preview/canary, sin release
   estable). El `postcss@8.4.31` y `sharp@0.34.5` viven dentro de `node_modules/next/`
   y solo se mueven cuando Next.js los sube. El único fix que ofrece npm es
   `next@9.3.3` (downgrade catastrófico) — **NO aplicar `--force`**. Acción: esperar
   Next.js 16.3.0 estable y volver a correr `npm audit fix`.
2. **Cadena de eslint** (`brace-expansion` → minimatch → eslint → @typescript-eslint
   → eslint-plugin-*). Fix requiere `eslint@10` (major) + downgrade de
   `eslint-config-next`. Es **tooling de desarrollo**, nunca se envía al navegador →
   riesgo real ~nulo para un sitio estático. Aplazado como decisión breaking aparte.

Regla: en la auditoría semanal, correr `npm audit fix` (sin `--force`) y actualizar
esta tabla. `--force` está prohibido salvo decisión explícita — degradaría Next.js.

## Enrutamiento de WhatsApp y Sistema de Agendamiento (Julio 2026)

### Decisión operativa
Los CTAs de WhatsApp del sitio se enrutan según destino:
- CTAs de sede específica → WhatsApp de la asistente de cada sede
  (Ángeles: 52 479 103 7564 · Muguerza: 52 477 235 1442)
- CTAs de segunda opinión oncológica → WhatsApp personal del Dr. Quiroz
  (52 477 633 0492) — paciente de mayor valor, respuesta personal del Dr.
- CTAs genéricos → modal SedeSelector → asistente de la sede elegida

Los números viven en `src/lib/contactos.ts`. NUNCA hardcodear números en
componentes o páginas.

**Tracking:** el parámetro `sede` del evento GA4 refleja la sede real elegida
("angeles" / "muguerza") o "dr-directo" en los CTAs de segunda opinión.

### Formulario /agendar
- Envía email vía Resend (API key en env `RESEND_API_KEY`)
- **Destinatario TEMPORAL: aqc.alejandr@gmail.com** — Resend gratuito sin dominio
  verificado solo permite enviar al correo de la cuenta. Revertir a
  urologoquiroz@gmail.com (EMAIL_CONTACTO) cuando el dominio esté verificado
  (bloqueado por limitación de Wix DNS)
- Anti-spam: campo honeypot `website` (si viene lleno → 200 sin enviar)
- Redirige a /gracias, que dispara el evento GA4 `conversion_contact` una sola vez
- `conversion_contact` es la conversión principal para Google Ads (Smart Bidding)
- /gracias tiene `robots: noindex` y NO va en el sitemap
- Remitente actual: onboarding@resend.dev (default de Resend) — migrar a dominio
  propio verificado cuando se configure

### Regla para futuras páginas
Todo CTA nuevo de WhatsApp debe clasificarse: ¿sede específica, segunda opinión,
o genérico? y usar el número/selector correspondiente (`WAButton telefono={...}`,
`WAButtonConSelector` o `WASelectorLink`). Todo formulario nuevo debe redirigir
a /gracias para aprovechar el evento de conversión.

## Página en inglés — international patients (Julio 2026)

### Decisión (basada en datos, no traducir el sitio completo)
GA4 (3–30 jul 2026) mostró **24 de 25 conversiones (96%) desde México**; EE. UU.
aportó 10 usuarios y 1 conversión, con la mitad de interacción, y "país ≠ idioma"
(probable diáspora hispanohablante). Traducir las ~20 páginas + hreflang +
mantenimiento duplicado NO tiene ROI para ese volumen.

**Respuesta proporcional:** UNA sola página en inglés, `/en/international-patients`,
como puente para expats/pacientes internacionales. NO es i18n del sitio.

### Reglas de esta página
- Es autocontenida: **no enlaza a las páginas en español** (no volcar lectores en
  inglés a contenido en español). Su conversión es WhatsApp.
- **Enrutamiento de CTAs → WhatsApp directo del Dr.** (`telefono={WA_DR}`,
  `sede="dr-directo"`), NO el SedeSelector: las asistentes son hispanohablantes y el
  Dr. atiende en inglés. Misma lógica que segunda opinión.
- `<main lang="en">` marca la región en inglés (el `<html lang="es">` global no cambia).
- Descubrible vía link discreto "English" en el Footer (sitewide). Si algún día los
  datos muestran demanda real en inglés, evaluar un toggle "EN" en el navbar.
- Si se agregan más páginas en inglés, anidarlas bajo `/en/` y recién entonces
  considerar hreflang formal.

## Git
- Repo: `https://github.com/fquirozcompean-lab/urologia-robotica-leon`
- Branch principal: `main`
- Deploy automático en Vercel al hacer push a main

## Regla de eliminación de features
Al eliminar un componente o feature, eliminar en la MISMA tarea todo su árbol de
dependencias: endpoints API que solo él consumía, libs/helpers exclusivos, assets
en /public que solo él usaba, y dependencias de package.json que quedan sin uso.
Verificar con grep antes de dar por terminado: el nombre del feature no debe
aparecer en ningún archivo de src/.
(Caso: MedicalAIAgent se eliminó pero /api/medical-chat, medicalKnowledgeBase.ts
y @anthropic-ai/sdk quedaron huérfanos ~7 meses hasta la auditoría de Jul 2026.)

## Mantenimiento de este archivo
Este archivo es la fuente de verdad del proyecto. Cada vez que completes una tarea que:
- agregue o elimine una página
- agregue, elimine o renombre un componente
- cambie una regla editorial o médico-legal
- cambie la estrategia de keywords/SEO
- cambie cualquier dato de contacto, hospital o credencial
- actualice una versión del stack (framework, librerías principales)

...debes actualizar la sección correspondiente de CLAUDE.md como parte de la misma tarea, antes de dar la tarea por terminada. Si no estás seguro de si un cambio amerita actualizar este archivo, pregunta antes de continuar.
