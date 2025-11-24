"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ollamaService = exports.OllamaService = void 0;
const axios_1 = __importDefault(require("axios"));
const chat_1 = require("../types/chat");
const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "gemma2:2b";
class OllamaService {
    async chat(messages) {
        const systemPrompt = {
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
        const payloadMessages = [systemPrompt, ...messages];
        const response = await axios_1.default.post(`${OLLAMA_URL}/api/chat`, {
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
exports.OllamaService = OllamaService;
exports.ollamaService = new OllamaService();
//# sourceMappingURL=ollamaService.js.map