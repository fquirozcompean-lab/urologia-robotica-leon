import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_MESSAGE } from "@/lib/medicalKnowledgeBase";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Mensajes inválidos" }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_MESSAGE,
      messages,
    });

    const content = response.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "Respuesta inesperada" }, { status: 500 });
    }

    return NextResponse.json({ reply: content.text });
  } catch (error) {
    console.error("Medical chat API error:", error);
    return NextResponse.json(
      { error: "Error al procesar tu consulta. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}
