import axios from "axios";
import { ChatMessage } from "../types/chat";

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "gemma2:2b";

export class OllamaService {
  async chat(messages: ChatMessage[]): Promise<string> {
    const systemPrompt: ChatMessage = {
      role: "system",
      content: `Eres un asistente experto en ingeniería estructural y construcción.
Respondes en español, con lenguaje claro pero técnicamente preciso.
Ayudas a usuarios de StructureScan (app de triaje estructural) en temas como:
- Tipos de daños estructurales (grietas, humedad, deformaciones)
- Causas probables de fallas
- Cuándo es necesario llamar a un profesional
- Prevención y mantenimiento
Nunca des diagnósticos definitivos sin recomendar verificación in situ por un ingeniero.`,
    };

    const payloadMessages: ChatMessage[] = [systemPrompt, ...messages];

    const response = await axios.post(`${OLLAMA_URL}/api/chat`, {
      model: OLLAMA_MODEL,
      messages: payloadMessages,
      stream: false,
    });

    // La forma exacta depende de Ollama, pero típicamente:
    // { message: { role: 'assistant', content: '...' } }
    const content = response.data?.message?.content || "";
    return content;
  }
}

export const ollamaService = new OllamaService();
