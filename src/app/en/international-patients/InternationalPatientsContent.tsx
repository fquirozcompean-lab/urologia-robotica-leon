"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import WAButton from "@/components/WAButton";
import { WA_DR } from "@/lib/contactos";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WA_MSG =
  "Hello Dr. Quiroz, I'm an international / English-speaking patient and would like to request a consultation.";

function FAQItem({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800">{q}</span>
        <span className="text-teal-600 text-xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-700 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </motion.div>
  );
}

const credentials = [
  {
    title: "Urologic Oncology Fellowship",
    place: "Instituto Nacional de Cancerología (INCan), Mexico City",
  },
  {
    title: "Urology Residency",
    place:
      "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán (INCMNSZ)",
  },
  {
    title: "Robotic Surgery Training",
    place: "Hospital Israelita Albert Einstein, São Paulo, Brazil",
  },
  {
    title: "Board Certification",
    place: "Mexican Board of Urology (CONAMEU)",
  },
];

const conditions = [
  {
    title: "Prostate Cancer",
    body: "Diagnosis, staging and treatment, including robotic-assisted radical prostatectomy and active surveillance when appropriate.",
  },
  {
    title: "Kidney Cancer",
    body: "Kidney-preserving surgery when possible — partial and radical nephrectomy through minimally invasive techniques.",
  },
  {
    title: "Bladder Cancer",
    body: "From cystoscopy and transurethral resection to robotic cystectomy, based on tumor stage.",
  },
  {
    title: "Enlarged Prostate & HoLEP",
    body: "Laser surgery (HoLEP) for benign prostatic enlargement of any size, with fast recovery and minimal bleeding.",
  },
  {
    title: "Robotic & Minimally Invasive Surgery",
    body: "3D-magnified precision, less blood loss and shorter hospital stays compared with open surgery.",
  },
  {
    title: "Second Opinions",
    body: "An independent, specialist review of an existing diagnosis before you decide on treatment.",
  },
];

export default function InternationalPatientsContent() {
  return (
    <main lang="en" className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            International & English-Speaking Patients · León, México
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            Urologic Oncology & Robotic Surgery in León, México
          </h1>
          <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-6">
            Dr. Alejandro Quiroz Compeán — board-certified urologic oncologist and
            robotic surgeon, caring for international and English-speaking patients in
            the Bajío region.
          </p>
          <p className="font-serif italic text-dorado mb-10">
            Fellowship-trained at INCan and Hospital Albert Einstein (Brazil)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WAButton
              mensaje={WA_MSG}
              motivo="international-patients-hero"
              telefono={WA_DR}
              sede="dr-directo"
              variant="green"
            >
              Message Dr. Quiroz on WhatsApp
            </WAButton>
          </div>
        </div>
      </section>

      {/* CARE IN ENGLISH */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            Care and communication in English
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-4 text-slate-700 leading-relaxed">
              Whether you live in the Bajío region as an expatriate, are researching care
              for a family member in México, or are considering treatment here, Dr. Quiroz
              communicates <strong>directly and personally</strong> with English-speaking
              patients.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              You can share your medical records for review, ask questions before
              traveling, and receive a clear explanation of your options — all in English.
              Messages sent through WhatsApp are answered by Dr. Quiroz himself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Training & credentials
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {credentials.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.place}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Professional License (Cédula Profesional) 8860892 · Specialty License
            12465195 · Board-certified by CONAMEU.
          </p>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            What Dr. Quiroz treats
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditions.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND OPINION FROM ABROAD */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900">
                A second opinion before you travel
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                If you already have a diagnosis of prostate, kidney or bladder cancer, you
                do not need to travel first. Share your <strong>PSA, biopsy report and
                imaging</strong>, and Dr. Quiroz can give you an independent specialist
                opinion on your case and options.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The goal is simple: to help you understand your diagnosis and make an
                informed decision with confidence.
              </p>
              <div className="mt-6">
                <WAButton
                  mensaje="Hello Dr. Quiroz, I have a urologic cancer diagnosis and would like a second opinion. I can share my records."
                  motivo="international-patients-second-opinion"
                  telefono={WA_DR}
                  sede="dr-directo"
                  variant="primary"
                >
                  Request a second opinion
                </WAButton>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Where Dr. Quiroz sees patients
              </h3>
              <ul className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <li>
                  <strong>Hospital Ángeles León</strong>
                  <br />
                  Office 615, Tower II · Lomas del Campestre
                </li>
                <li>
                  <strong>Hospital Christus Muguerza Altagracia</strong>
                  <br />
                  Office 724 · Valle del Campestre
                </li>
                <li className="text-slate-500">León, Guanajuato, México</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Frequently asked questions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            <FAQItem q="Does Dr. Quiroz see English-speaking patients?">
              Yes. Dr. Quiroz communicates directly with international and English-speaking
              patients and personally answers inquiries sent through WhatsApp. You do not
              need to speak Spanish to consult with him.
            </FAQItem>
            <FAQItem q="Can I get a second opinion from another country before traveling?">
              Yes. If you already have a diagnosis, you can share your records — PSA,
              biopsy report, and imaging — and Dr. Quiroz can provide an independent
              specialist opinion on your case before you decide to travel. This is common
              for prostate, kidney and bladder cancer.
            </FAQItem>
            <FAQItem q="What information should I send or bring?">
              Whatever you already have: lab results (such as PSA), pathology and biopsy
              reports, and imaging studies (MRI, CT or PET). If something is missing, it
              will be defined during the consultation. The more complete the information,
              the more precise the opinion.
            </FAQItem>
            <FAQItem q="How do I schedule a consultation?">
              Message Dr. Quiroz directly on WhatsApp describing your situation. You will
              receive guidance on availability, the clinic location, and what to send or
              bring. Consultations take place at Hospital Ángeles León and Hospital
              Christus Muguerza Altagracia in León, Guanajuato.
            </FAQItem>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contact" className="bg-gradient-to-br from-teal-700 to-indigo-800 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Talk directly with Dr. Quiroz
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/85 text-lg leading-relaxed"
          >
            Send a message describing your situation. Dr. Quiroz answers personally and in
            English — no need to speak Spanish.
          </motion.p>
          <div className="mt-8 flex justify-center">
            <WAButton
              mensaje={WA_MSG}
              motivo="international-patients-cta-final"
              telefono={WA_DR}
              sede="dr-directo"
              variant="green"
            >
              Message Dr. Quiroz on WhatsApp
            </WAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
