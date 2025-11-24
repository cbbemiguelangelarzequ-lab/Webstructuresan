import React, { useState } from "react";
import axios from "axios";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

const API_URL = import.meta.env.VITE_API_URL || "";

const ChatbotFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hola 👋 Soy el asistente de StructureScan. Puedo responder dudas sobre daños estructurales, grietas, humedad y cómo usar la app.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const newMessage: ChatMessage = { role: "user", content: trimmed };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await axios.post(
        `${API_URL}/api/chat`,
        { messages: newMessages },
        { headers: { "Content-Type": "application/json" } }
      );

      const assistantMessage: ChatMessage = response.data;
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error llamando al chatbot:", error);
      setErrorMsg(
        "Hubo un problema al contactar con la IA. Intenta de nuevo en un momento."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/50 ring-2 ring-slate-950/80 hover:scale-105 transition-transform"
      >
        <FiMessageCircle className="h-6 w-6" />
        <span className="sr-only">Abrir chat con IA</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 z-40 flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-2.5">
            <div>
              <p className="text-xs font-semibold text-slate-100">
                Asistente de StructureScan
              </p>
              <p className="text-[0.7rem] text-slate-400">
                IA especializada en daños estructurales (Ollama + Gemma)
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex max-h-80 flex-col gap-2 overflow-y-auto px-3 py-3 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                    msg.role === "user"
                      ? "bg-sky-500 text-white"
                      : "bg-slate-800/90 text-slate-50 border border-slate-700/80"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-slate-800/80 px-3 py-2 text-slate-300">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-300" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-300 delay-150" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-300 delay-300" />
                  <span className="text-[0.7rem]">Pensando…</span>
                </div>
              </div>
            )}

            {errorMsg && (
              <p className="mt-1 text-[0.7rem] text-red-400">{errorMsg}</p>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-800/80 bg-slate-950/95 px-3 py-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pregúntame sobre grietas, humedad, riesgo..."
                className="flex-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white disabled:opacity-40"
              >
                <FiSend className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-1 text-[0.65rem] text-slate-500">
              La IA no reemplaza a un ingeniero. Ante dudas críticas, solicita una inspección profesional.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotFloating;
