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
- **Framework:** Next.js 15 (App Router) + Vercel
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
--color-gris-premium:#7B8790  ← textos secundarios
--color-gris-profundo:#37474F ← textos cuerpo
--color-quirurgico:  #4A90A4  ← acento teal / iconos
--color-dorado:      #B8A36A  ← detalles premium / divisores
```
Clases: `bg-petroleo`, `text-editorial`, `bg-acero`, `text-quirurgico`, `text-dorado`, etc.

## Arquitectura de componentes
```
src/
├── components/
│   ├── Navbar.tsx          ← navbar global fija (bg-petroleo), WA verde
│   ├── Footer.tsx          ← footer global (bg-petroleo, 4 cols + COFEPRIS)
│   └── ServiceCard.tsx     ← tarjeta de especialidad con link
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

## Reglas editoriales / médico-legales
- ❌ NO usar: "el mejor", "garantizado", "100% seguro", "cura definitiva"
- ❌ NO prometer resultados clínicos individuales
- ✅ SÍ usar: "basado en evidencia científica", "en la mayoría de los pacientes", "con intención curativa"
- ✅ El CTA primario siempre debe ir a **WhatsApp**, no a Doctoralia
- ✅ Doctoralia va como CTA secundario o en el footer

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

## Git
- Repo: `https://github.com/fquirozcompean-lab/urologia-robotica-leon`
- Branch principal: `main`
- Deploy automático en Vercel al hacer push a main

## Mantenimiento de este archivo
Este archivo es la fuente de verdad del proyecto. Cada vez que completes una tarea que:
- agregue o elimine una página
- agregue, elimine o renombre un componente
- cambie una regla editorial o médico-legal
- cambie la estrategia de keywords/SEO
- cambie cualquier dato de contacto, hospital o credencial

...debes actualizar la sección correspondiente de CLAUDE.md como parte de la misma tarea, antes de dar la tarea por terminada. Si no estás seguro de si un cambio amerita actualizar este archivo, pregunta antes de continuar.
