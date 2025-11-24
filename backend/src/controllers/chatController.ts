import { Request, Response } from "express";
import { ChatMessage } from "../types/chat";
import { ollamaService } from "../services/ollamaService";

export const chatHandler = async (req: Request, res: Response) => {
  try {
    const messages: ChatMessage[] = req.body?.messages || [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages es requerido y debe ser un array" });
    }

    // Usar Ollama (Gemma)
    const content = await ollamaService.chat(messages);

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content,
    };

    res.json(assistantMessage);
  } catch (error) {
    console.error("Error en chatHandler:", error);
    res.status(500).json({
      error: "Error interno en el chatbot. Asegúrate de que Ollama esté corriendo.",
    });
  }
};
