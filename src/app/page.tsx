import {
  Activity,
  AlertCircle,
  Droplet,
  Zap,
  Heart,
  Shield,
  Stethoscope,
  Hexagon,
  Crosshair,
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: "Urólogo Oncólogo en León | Cirugía de Próstata y Riñón — Dr. Alejandro Quiroz",
  description: "Urología oncológica y cirugía avanzada en León, Guanajuato. Tratamiento de cáncer de próstata, cáncer renal, HPB, infección urinaria, disfunción eréctil y VPH. Dr. Alejandro Quiroz Compeán.",
}

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="relative bg-petroleo text-editorial min-h-[70vh] flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* TEXTO - Izquierda */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans leading-tight">
                Urología Oncológica y Cirugía Avanzada en León, Guanajuato
              </h1>

              <p className="text-xl md:text-2xl mb-4 font-serif text-editorial/90 leading-relaxed">
                Tratamiento integral de cáncer urológico, cirugía mínimamente invasiva y salud sexual masculina.
                Atención especializada con tecnología de vanguardia.
              </p>

              <p className="text-lg md:text-xl mb-10 font-serif italic text-dorado">
                Precisión que inspira confianza
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="https://www.doctoralia.com.mx/z/oFar6h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-acero text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-acero/90 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agenda tu consulta
                </a>

                <a
                  href="tel:+524791037564"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-acero text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-acero hover:text-editorial transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  479 103 7564
                </a>
              </div>
            </div>

            {/* FOTO - Derecha */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/dr-quiroz-profesional.jpg"
                  alt="Dr. Alejandro Quiroz Compeán - Urólogo Oncólogo"
                  className="rounded-2xl shadow-2xl border-4 border-acero/20 w-full max-w-md lg:max-w-lg object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ESPECIALIDADES ===== */}
      <section className="py-20 px-4 bg-white" id="especialidades">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-petroleo mb-4 font-sans">
              Especialidades Urológicas
            </h2>
            <p className="text-xl text-gris-premium max-w-3xl mx-auto font-serif">
              Atención integral en urología general, urología oncológica y salud sexual masculina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Activity size={48} className="text-quirurgico" strokeWidth={2} />}
              title="Cáncer de Próstata"
              description="Diagnóstico, estadificación y cirugía oncológica. Prostatectomía radical con tecnología mínimamente invasiva para preservar función sexual y urinaria."
              href="/cancer-prostata"
            />

            <ServiceCard
              icon={<AlertCircle size={48} className="text-quirurgico" strokeWidth={2} />}
              title="Crecimiento de Próstata / HPB"
              description="Tratamiento médico y quirúrgico del crecimiento prostático benigno. Opciones de cirugía con láser y mínimamente invasiva para recuperación rápida."
              href="/hiperplasia-prostatica-benigna"
            />

            <ServiceCard
              icon={<Crosshair size={48} className="text-quirurgico" strokeWidth={2} />}
              title="HoLEP: Cirugía Láser de Próstata"
              description="Cirugía láser HoLEP para próstata grande. Recuperación en 24–48 h, mínimo sangrado y sin límite de tamaño prostático. Técnica gold standard mundial."
              href="/holep-cirugia-laser"
            />

            <ServiceCard
              icon={<Droplet size={48} className="text-quirurgico" strokeWidth={2} />}
              title="Cáncer Renal"
              description="Cirugía oncológica renal con preservación de función. Nefrectomía parcial y radical por técnicas mínimamente invasivas."
              href="/cancer-renal"
            />

            <ServiceCard
              icon={<Zap size={48} className="text-quirurgico" strokeWidth={2} />}
              title="Infección Urinaria"
              description="Diagnóstico y tratamiento de infecciones urinarias agudas y recurrentes. Evaluación completa y plan de prevención personalizado."
              href="/infeccion-urinaria"
            />

            <ServiceCard
              icon={<Heart size={48} className="text-quirurgico" strokeWidth={2} />}
              title="Disfunción Eréctil"
              description="Evaluación y tratamiento de problemas de erección. Opciones médicas y manejo integral de salud sexual masculina."
              href="/disfuncion-erectil"
            />

            <ServiceCard
              icon={<Shield size={48} className="text-quirurgico" strokeWidth={2} />}
              title="VPH en Hombres"
              description="Diagnóstico, tratamiento y prevención del virus del papiloma humano en hombres. Evaluación de verrugas genitales y asesoría sobre vacunación."
              href="/vph-en-hombres"
            />

            <ServiceCard
              icon={<Stethoscope size={48} className="text-quirurgico" strokeWidth={2} />}
              title="Verrugas Genitales"
              description="Tratamiento y eliminación de verrugas genitales. Crioterapia, electrofulguración y láser para resultados efectivos."
              href="/verrugas-genitales"
            />

            <ServiceCard
              icon={<Hexagon size={48} className="text-quirurgico" strokeWidth={2} />}
              title="Cálculos Renales"
              description="Diagnóstico y tratamiento de piedras en riñón. Manejo del cólico renal y prevención de recurrencias."
              href="/calculos-renales"
            />
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ ELEGIR ===== */}
      <section className="py-20 px-4 bg-editorial">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-petroleo mb-4 font-sans">
              Experiencia, Tecnología y Resultados
            </h2>
            <div className="w-24 h-1 bg-dorado mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-quirurgico/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">
                Formación en Centros de Excelencia
              </h3>
              <div className="text-gris-premium font-serif text-[15px] leading-relaxed text-left max-w-sm mx-auto">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-quirurgico mt-1 flex-shrink-0">•</span>
                    <span><strong className="font-sans">Urología</strong> — Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quirurgico mt-1 flex-shrink-0">•</span>
                    <span><strong className="font-sans">Alta Especialidad en Urología Oncológica</strong> — Instituto Nacional de Cancerología (INCan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quirurgico mt-1 flex-shrink-0">•</span>
                    <span><strong className="font-sans">Postgrado en Cirugía Robótica</strong> — Hospital Albert Einstein, Brasil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quirurgico mt-1 flex-shrink-0">•</span>
                    <span><strong className="font-sans">Certificación</strong> — Consejo Mexicano de Urología</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-quirurgico/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">
                Cirugía Mínimamente Invasiva
              </h3>
              <p className="text-gris-premium font-serif text-[15px] leading-relaxed">
                Entrenamiento en cirugía robótica (Hospital Albert Einstein, Brasil).
                Laparoscopia avanzada y láser. Menor dolor, recuperación más rápida.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-quirurgico/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">
                Atención Integral
              </h3>
              <p className="text-gris-premium font-serif text-[15px] leading-relaxed">
                Desde diagnóstico hasta seguimiento.
                Enfoque en preservación de función y calidad de vida.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-quirurgico/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">
                Ubicaciones en León
              </h3>
              <p className="text-gris-premium font-serif text-[15px] leading-relaxed">
                Hospital Ángeles León y Hospital Christus Muguerza Altagracia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== HOSPITALES ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-petroleo mb-4 font-sans">
              Ubicaciones
            </h2>
            <div className="w-24 h-1 bg-dorado mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-editorial p-8 rounded-xl shadow-lg border-2 border-gris-premium/20">
              <h3 className="text-2xl font-bold mb-4 text-acero font-sans">
                Hospital Ángeles León
              </h3>
              <p className="text-gris-profundo mb-2 font-serif">
                <strong className="font-sans">Consultorio 615, Torre II</strong>
              </p>
              <p className="text-gris-premium mb-4 font-serif text-[15px]">
                Av. Cerro Gordo 311, Lomas del Campestre
              </p>
              <p className="text-gris-profundo mb-2 font-serif">
                <strong className="font-sans">Horarios:</strong> Lun / Mar / Jue
              </p>
              <p className="text-gris-premium mb-4 font-serif text-[15px]">
                9:00 AM - 8:00 PM
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.doctoralia.com.mx/z/oFar6h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-acero hover:text-petroleo font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agendar en Doctoralia
                </a>
                <br />
                <a
                  href="tel:+524791037564"
                  className="inline-flex items-center gap-2 text-gris-premium hover:text-acero font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Tel: 479 103 7564
                </a>
                <br />
                <a
                  href="https://maps.app.goo.gl/xX2Rgs1cjE4e4vAz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gris-premium hover:text-acero font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>
            </div>

            <div className="bg-editorial p-8 rounded-xl shadow-lg border-2 border-gris-premium/20">
              <h3 className="text-2xl font-bold mb-4 text-acero font-sans">
                Hospital Christus Muguerza Altagracia
              </h3>
              <p className="text-gris-profundo mb-2 font-serif">
                <strong className="font-sans">Consultorio 724</strong>
              </p>
              <p className="text-gris-premium mb-4 font-serif text-[15px]">
                Blvd. Juan Alonso de Torres 2002, Valle del Campestre
              </p>
              <p className="text-gris-profundo mb-2 font-serif">
                <strong className="font-sans">Horarios:</strong> Mié / Vie
              </p>
              <p className="text-gris-premium mb-4 font-serif text-[15px]">
                9:00 AM - 8:00 PM
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.doctoralia.com.mx/z/oFar6h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-acero hover:text-petroleo font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agendar en Doctoralia
                </a>
                <br />
                <a
                  href="tel:+524772351442"
                  className="inline-flex items-center gap-2 text-gris-premium hover:text-acero font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Tel: 477 235 1442
                </a>
                <br />
                <a
                  href="https://maps.app.goo.gl/9GaeXhzTKwQ8ngZP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gris-premium hover:text-acero font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-16 px-4 bg-acero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-editorial mb-4 font-sans">
            Agenda tu Consulta Especializada
          </h2>
          <p className="text-xl text-editorial/90 mb-8 font-serif">
            Atención profesional y confidencial en León, Guanajuato
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.doctoralia.com.mx/z/oFar6h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-editorial text-petroleo px-8 py-4 rounded-lg font-bold font-sans hover:bg-editorial/90 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar en Doctoralia
            </a>
            <a
              href="tel:+524791037564"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-editorial text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-editorial hover:text-acero transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-petroleo text-editorial py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            <div>
              <h4 className="text-editorial font-bold text-lg mb-4 font-sans">
                Dr. Alejandro Quiroz Compeán
              </h4>
              <p className="text-sm mb-2 font-serif text-editorial/80">Urólogo Oncólogo</p>
              <p className="text-sm mb-1 text-editorial/70">Cédula: 8860892</p>
              <p className="text-sm text-editorial/70">Especialidad: 12465195</p>
            </div>

            <div>
              <h4 className="text-editorial font-bold text-lg mb-4 font-sans">Contacto</h4>
              <p className="text-sm mb-2 font-serif">
                <a href="https://wa.me/5214776330492" className="hover:text-quirurgico transition-colors">
                  WhatsApp: 477 633 0492
                </a>
              </p>
              <p className="text-xs text-editorial/60 font-serif mb-4">
                Para consultas y dudas
              </p>
              <p className="text-sm font-serif">
                <a
                  href="https://www.doctoralia.com.mx/z/oFar6h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-quirurgico transition-colors inline-flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Agendar consulta
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-editorial font-bold text-lg mb-4 font-sans">Horarios</h4>
              <p className="text-sm mb-2 font-serif">
                <strong className="text-editorial/90 font-sans">Lun / Mar / Jue:</strong><br />
                Hospital Ángeles León
              </p>
              <p className="text-sm font-serif">
                <strong className="text-editorial/90 font-sans">Mié / Vie:</strong><br />
                Hospital Muguerza
              </p>
            </div>

            <div>
              <h4 className="text-editorial font-bold text-lg mb-4 font-sans">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/urologo.alejandroquiroz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gris-profundo rounded-full flex items-center justify-center hover:bg-quirurgico transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/DrQuirozUrologoLeon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gris-profundo rounded-full flex items-center justify-center hover:bg-quirurgico transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-editorial/60 mt-4 font-serif">
                Síguenos para contenido educativo sobre salud urológica
              </p>
            </div>

          </div>

          <div className="border-t border-dorado/30 pt-8 text-center text-sm text-editorial/70 font-serif">
            <p>© 2025 Dr. Alejandro Quiroz Compeán. Todos los derechos reservados.</p>
            <p className="mt-2">Urología Oncológica y Cirugía Avanzada en León, Guanajuato</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
