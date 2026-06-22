"use client";

import Link from "next/link";
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
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import WAButton from "@/components/WAButton";
import CallButton from "@/components/CallButton";
import { trackDoctoralia } from "@/lib/analytics";

const DOCTORALIA = "https://www.doctoralia.com.mx/z/oFar6h";

const WA_ICON = (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HomeContent() {
  return (
    <main className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="relative bg-petroleo text-editorial min-h-[70vh] flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center bg-acero/30 border border-acero/50 rounded-full px-4 py-1.5 text-sm text-editorial mb-5 font-sans">
                Urólogo oncólogo certificado · León, Guanajuato
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans leading-tight">
                Urólogo oncólogo en León especializado en cáncer de próstata, cáncer renal y cirugía robótica
              </h1>

              <p className="text-xl md:text-2xl mb-4 font-serif text-editorial/90 leading-relaxed">
                Dr. Alejandro Quiroz Compeán — Certificado por CONAMEU, con alta especialidad en Urología Oncológica (INCan) y formación en cirugía robótica urológica en el Hospital Albert Einstein, São Paulo.
              </p>

              <p className="text-lg md:text-xl mb-10 font-serif italic text-dorado">
                Precisión que inspira confianza
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <WAButton
                  mensaje="Hola Dr. Quiroz, quiero agendar una valoración."
                  motivo="home-general"
                  variant="green"
                  className="shadow-lg gap-3"
                >
                  {WA_ICON}
                  Agendar valoración
                </WAButton>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-editorial/70 justify-center lg:justify-start font-sans">
                <span>C.P. 8860892</span><span>·</span>
                <span>C.E. 12465195</span><span>·</span>
                <span>Certificado CONAMEU</span><span>·</span>
                <span>Hosp. Ángeles León · Hosp. Christus Muguerza</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/foto-para-web.png"
                  alt="Dr. Alejandro Quiroz Compeán — Urólogo oncólogo en León, Guanajuato"
                  className="rounded-2xl shadow-2xl border-4 border-acero/20 w-full max-w-md lg:max-w-lg object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ACCESOS RÁPIDOS ===== */}
      <section className="py-10 px-4 bg-white border-b border-gris-premium/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gris-profundo text-center mb-6 font-sans uppercase tracking-widest">
            Consultas frecuentes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

            <Link href="/cancer-prostata" className="group block bg-editorial rounded-xl p-5 border-2 border-gris-premium/15 hover:border-acero hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-petroleo font-sans text-[15px] mb-1">Cáncer de próstata</h3>
              <p className="text-xs text-gris-profundo font-serif leading-relaxed">Diagnóstico, PSA y prostatectomía robótica.</p>
              <span className="text-xs text-acero font-medium font-sans mt-3 inline-block group-hover:underline">Ver información →</span>
            </Link>

            <Link href="/hiperplasia-prostatica-benigna" className="group block bg-editorial rounded-xl p-5 border-2 border-gris-premium/15 hover:border-acero hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-petroleo font-sans text-[15px] mb-1">Crecimiento prostático y HoLEP</h3>
              <p className="text-xs text-gris-profundo font-serif leading-relaxed">Síntomas urinarios y cirugía láser sin implante.</p>
              <span className="text-xs text-acero font-medium font-sans mt-3 inline-block group-hover:underline">Ver opciones →</span>
            </Link>

            <Link href="/calculos-renales" className="group block bg-editorial rounded-xl p-5 border-2 border-gris-premium/15 hover:border-acero hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-petroleo font-sans text-[15px] mb-1">Piedras en riñón o uréter</h3>
              <p className="text-xs text-gris-profundo font-serif leading-relaxed">Cólico renal y tratamiento mínimamente invasivo.</p>
              <span className="text-xs text-acero font-medium font-sans mt-3 inline-block group-hover:underline">Ver tratamientos →</span>
            </Link>

            <Link href="/cancer-renal" className="group block bg-editorial rounded-xl p-5 border-2 border-gris-premium/15 hover:border-acero hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-petroleo font-sans text-[15px] mb-1">Cáncer renal</h3>
              <p className="text-xs text-gris-profundo font-serif leading-relaxed">Nefrectomía parcial o radical con técnica robótica.</p>
              <span className="text-xs text-acero font-medium font-sans mt-3 inline-block group-hover:underline">Ver información →</span>
            </Link>

            <Link href="#especialidades" className="group block bg-editorial rounded-xl p-5 border-2 border-gris-premium/15 hover:border-acero hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-petroleo font-sans text-[15px] mb-1">Cirugía robótica urológica</h3>
              <p className="text-xs text-gris-profundo font-serif leading-relaxed">Prostatectomía, nefrectomía y cistectomía Da Vinci.</p>
              <span className="text-xs text-acero font-medium font-sans mt-3 inline-block group-hover:underline">Ver especialidades →</span>
            </Link>

            <WAButton
              mensaje="Hola Dr. Quiroz, quisiera una valoración oncológica especializada."
              motivo="home-oncologica"
              variant="ghost"
              className="group block bg-petroleo rounded-xl p-5 border-2 border-petroleo hover:border-acero hover:shadow-lg transition-all duration-300 h-full text-left items-start"
            >
              <h3 className="font-bold text-editorial font-sans text-[15px] mb-1">Valoración oncológica</h3>
              <p className="text-xs text-editorial/60 font-serif leading-relaxed">Diagnóstico y criterio especializado en urología oncológica.</p>
              <span className="text-xs text-acero font-medium font-sans mt-3 inline-block group-hover:underline">Solicitar valoración →</span>
            </WAButton>

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
            <p className="text-xl text-gris-profundo max-w-3xl mx-auto font-serif">
              Atención integral en urología general, urología oncológica y salud sexual masculina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Activity size={48} className="text-quirurgico" strokeWidth={2} />} title="Cáncer de Próstata" description="Diagnóstico, estadificación y cirugía oncológica. Prostatectomía radical con tecnología mínimamente invasiva para preservar función sexual y urinaria." href="/cancer-prostata" />
            <ServiceCard icon={<AlertCircle size={48} className="text-quirurgico" strokeWidth={2} />} title="Crecimiento de Próstata / HPB" description="Tratamiento médico y quirúrgico del crecimiento prostático benigno. Opciones de cirugía con láser y mínimamente invasiva para recuperación rápida." href="/hiperplasia-prostatica-benigna" />
            <ServiceCard icon={<Crosshair size={48} className="text-quirurgico" strokeWidth={2} />} title="HoLEP: Cirugía Láser de Próstata" description="Cirugía láser HoLEP para próstata grande. Recuperación en 24–48 h, mínimo sangrado y sin límite de tamaño prostático. Técnica gold standard mundial." href="/holep-cirugia-laser" />
            <ServiceCard icon={<Droplet size={48} className="text-quirurgico" strokeWidth={2} />} title="Cáncer Renal" description="Cirugía oncológica renal con preservación de función. Nefrectomía parcial y radical por técnicas mínimamente invasivas." href="/cancer-renal" />
            <ServiceCard icon={<Zap size={48} className="text-quirurgico" strokeWidth={2} />} title="Infección Urinaria" description="Diagnóstico y tratamiento de infecciones urinarias agudas y recurrentes. Evaluación completa y plan de prevención personalizado." href="/infeccion-urinaria" />
            <ServiceCard icon={<Heart size={48} className="text-quirurgico" strokeWidth={2} />} title="Disfunción Eréctil" description="Evaluación y tratamiento de problemas de erección. Opciones médicas y manejo integral de salud sexual masculina." href="/disfuncion-erectil" />
            <ServiceCard icon={<Shield size={48} className="text-quirurgico" strokeWidth={2} />} title="VPH en Hombres" description="Diagnóstico, tratamiento y prevención del virus del papiloma humano en hombres. Evaluación de verrugas genitales y asesoría sobre vacunación." href="/vph-en-hombres" />
            <ServiceCard icon={<Stethoscope size={48} className="text-quirurgico" strokeWidth={2} />} title="Verrugas Genitales" description="Tratamiento y eliminación de verrugas genitales. Crioterapia, electrofulguración y láser para resultados efectivos." href="/verrugas-genitales" />
            <ServiceCard icon={<Hexagon size={48} className="text-quirurgico" strokeWidth={2} />} title="Cálculos Renales" description="Diagnóstico y tratamiento de piedras en riñón. Manejo del cólico renal y prevención de recurrencias." href="/calculos-renales" />
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
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">Formación en Centros de Excelencia</h3>
              <div className="text-gris-profundo font-serif text-[15px] leading-relaxed text-left max-w-sm mx-auto">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="text-quirurgico mt-1 flex-shrink-0">•</span><span><strong className="font-sans">Urología</strong> — Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán</span></li>
                  <li className="flex items-start gap-2"><span className="text-quirurgico mt-1 flex-shrink-0">•</span><span><strong className="font-sans">Alta Especialidad en Urología Oncológica</strong> — Instituto Nacional de Cancerología (INCan)</span></li>
                  <li className="flex items-start gap-2"><span className="text-quirurgico mt-1 flex-shrink-0">•</span><span><strong className="font-sans">Postgrado en Cirugía Robótica</strong> — Hospital Albert Einstein, Brasil</span></li>
                  <li className="flex items-start gap-2"><span className="text-quirurgico mt-1 flex-shrink-0">•</span><span><strong className="font-sans">Certificación</strong> — Consejo Mexicano de Urología</span></li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-quirurgico/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">Cirugía Mínimamente Invasiva</h3>
              <p className="text-gris-profundo font-serif text-[15px] leading-relaxed">Entrenamiento en cirugía robótica (Hospital Albert Einstein, Brasil). Laparoscopia avanzada y láser. Menor dolor, recuperación más rápida.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-quirurgico/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">Atención Integral</h3>
              <p className="text-gris-profundo font-serif text-[15px] leading-relaxed">Desde diagnóstico hasta seguimiento. Enfoque en preservación de función y calidad de vida.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-quirurgico/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-quirurgico" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-petroleo font-sans">Ubicaciones en León</h3>
              <p className="text-gris-profundo font-serif text-[15px] leading-relaxed">Hospital Ángeles León y Hospital Christus Muguerza Altagracia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOSPITALES ===== */}
      <section id="hospitales" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-petroleo mb-4 font-sans">Ubicaciones</h2>
            <div className="w-24 h-1 bg-dorado mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-editorial p-8 rounded-xl shadow-lg border-2 border-gris-premium/20">
              <h3 className="text-2xl font-bold mb-4 text-acero font-sans">Hospital Ángeles León</h3>
              <p className="text-gris-profundo mb-2 font-serif"><strong className="font-sans">Consultorio 615, Torre II</strong></p>
              <p className="text-gris-profundo mb-4 font-serif text-[15px]">Av. Cerro Gordo 311, Lomas del Campestre</p>
              <p className="text-gris-profundo mb-2 font-serif"><strong className="font-sans">Horarios:</strong> Lun / Mar / Jue</p>
              <p className="text-gris-profundo mb-6 font-serif text-[15px]">9:00 AM - 8:00 PM</p>
              <div className="space-y-3">
                <WAButton
                  mensaje="Hola Dr. Quiroz, quiero agendar una consulta en Hospital Ángeles León."
                  motivo="hospital-angeles"
                  sede="angeles"
                  variant="primary"
                  className="w-full text-sm px-4 py-2.5"
                >
                  Agendar por WhatsApp
                </WAButton>
                <CallButton
                  telefono="4791037564"
                  sede="angeles"
                  variant="ghost"
                  className="inline-flex items-center gap-2 text-gris-profundo hover:text-acero font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Tel: 479 103 7564
                </CallButton>
                <br />
                <a href="https://maps.app.goo.gl/xX2Rgs1cjE4e4vAz8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gris-profundo hover:text-acero font-medium font-sans transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Ver en Google Maps
                </a>
                <br />
                <a href={DOCTORALIA} target="_blank" rel="noopener noreferrer" onClick={() => trackDoctoralia("home-angeles")} className="text-gris-profundo text-sm hover:text-acero transition-colors font-sans">
                  Ver opiniones en Doctoralia →
                </a>
              </div>
            </div>

            <div className="bg-editorial p-8 rounded-xl shadow-lg border-2 border-gris-premium/20">
              <h3 className="text-2xl font-bold mb-4 text-acero font-sans">Hospital Christus Muguerza Altagracia</h3>
              <p className="text-gris-profundo mb-2 font-serif"><strong className="font-sans">Consultorio 724</strong></p>
              <p className="text-gris-profundo mb-4 font-serif text-[15px]">Blvd. Juan Alonso de Torres 2002, Valle del Campestre</p>
              <p className="text-gris-profundo mb-2 font-serif"><strong className="font-sans">Horarios:</strong> Mié / Vie</p>
              <p className="text-gris-profundo mb-6 font-serif text-[15px]">9:00 AM - 8:00 PM</p>
              <div className="space-y-3">
                <WAButton
                  mensaje="Hola Dr. Quiroz, quiero agendar una consulta en Hospital Muguerza Altagracia."
                  motivo="hospital-muguerza"
                  sede="muguerza"
                  variant="primary"
                  className="w-full text-sm px-4 py-2.5"
                >
                  Agendar por WhatsApp
                </WAButton>
                <CallButton
                  telefono="4772351442"
                  sede="muguerza"
                  variant="ghost"
                  className="inline-flex items-center gap-2 text-gris-profundo hover:text-acero font-medium font-sans transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Tel: 477 235 1442
                </CallButton>
                <br />
                <a href="https://maps.app.goo.gl/9GaeXhzTKwQ8ngZP6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gris-profundo hover:text-acero font-medium font-sans transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Ver en Google Maps
                </a>
                <br />
                <a href={DOCTORALIA} target="_blank" rel="noopener noreferrer" onClick={() => trackDoctoralia("home-muguerza")} className="text-gris-profundo text-sm hover:text-acero transition-colors font-sans">
                  Ver opiniones en Doctoralia →
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
            <WAButton
              mensaje="Hola Dr. Quiroz, quiero agendar una valoración."
              motivo="home-general"
              variant="green"
              className="shadow-lg gap-3"
            >
              {WA_ICON}
              Agendar valoración
            </WAButton>
            <CallButton
              telefono="4791037564"
              sede="angeles"
              variant="secondary"
              className="border-editorial text-editorial hover:bg-editorial hover:text-acero"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Llamar ahora
            </CallButton>
          </div>
        </div>
      </section>

    </main>
  );
}
