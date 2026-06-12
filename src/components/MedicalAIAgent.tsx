"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, CalendarCheck } from "lucide-react";
import { INITIAL_MESSAGE } from "@/lib/medicalKnowledgeBase";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function MedicalAIAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const showAppointmentButton = userMessageCount >= 2;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const updated: Message[] = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/medical-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([...updated, { role: "assistant", content: data.reply }]);
      } else {
        setMessages([
          ...updated,
          {
            role: "assistant",
            content:
              "Hubo un error al procesar tu consulta. Por favor intenta de nuevo.",
          },
        ]);
      }
    } catch {
      setMessages([
        ...updated,
        {
          role: "assistant",
          content:
            "No se pudo conectar con el servicio. Verifica tu conexión e intenta de nuevo.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{
            width: "24rem",
            height: "600px",
            background: "#0F2D3A",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ background: "#0a1f29" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 6px #4ade80" }}
              />
              <span className="text-white font-semibold text-sm">
                Asistente Médico
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap"
                  style={
                    msg.role === "user"
                      ? { background: "#2563eb", color: "#fff" }
                      : { background: "#1a3d4f", color: "#cbd5e1" }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="rounded-xl px-3 py-2"
                  style={{ background: "#1a3d4f" }}
                >
                  <Loader2
                    size={16}
                    className="animate-spin text-slate-400"
                  />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Appointment button */}
          {showAppointmentButton && (
            <div className="px-4 pb-2 flex-shrink-0">
              <a
                href="https://www.doctoralia.com.mx/z/oFar6h"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-white text-sm font-medium transition-colors"
                style={{ background: "#1d5a7a" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#236d94")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#1d5a7a")
                }
              >
                <CalendarCheck size={15} />
                Agendar consulta con el Dr. Quiroz
              </a>
            </div>
          )}

          {/* Input */}
          <div
            className="px-3 pb-3 flex-shrink-0"
            style={{ borderTop: "1px solid #1a3d4f" }}
          >
            <div
              className="flex items-end gap-2 rounded-xl px-3 py-2 mt-2"
              style={{ background: "#1a3d4f" }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Escribe tu pregunta…"
                className="flex-1 bg-transparent text-slate-200 placeholder-slate-500 text-sm resize-none outline-none leading-relaxed"
                style={{ maxHeight: "80px" }}
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="flex-shrink-0 p-1 rounded-lg transition-colors disabled:opacity-40"
                style={{ color: "#60a5fa" }}
                aria-label="Enviar"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-center text-slate-600 text-xs mt-1">
              No diagnostica ni prescribe. Solo orientación informativa.
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#0F2D3A", border: "2px solid #1d5a7a" }}
        aria-label={open ? "Cerrar asistente médico" : "Abrir asistente médico"}
      >
        {open ? (
          <X size={22} className="text-slate-300" />
        ) : (
          <MessageCircle size={22} className="text-slate-300" />
        )}
      </button>
    </>
  );
}
