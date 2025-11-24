"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatHandler = void 0;
const express_1 = require("express");
const chat_1 = require("../types/chat");
const ollamaService_1 = require("../services/ollamaService");
const chatHandler = async (req, res) => {
    try {
        const messages = req.body?.messages || [];
        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ error: "messages es requerido y debe ser un array" });
        }
        // Usar Ollama (Gemma)
        const content = await ollamaService_1.ollamaService.chat(messages);
        const assistantMessage = {
            role: "assistant",
            content,
        };
        res.json(assistantMessage);
    }
    catch (error) {
        console.error("Error en chatHandler:", error);
        res.status(500).json({
            error: "Error interno en el chatbot. Asegúrate de que Ollama esté corriendo.",
        });
    }
};
exports.chatHandler = chatHandler;
//# sourceMappingURL=chatController.js.map