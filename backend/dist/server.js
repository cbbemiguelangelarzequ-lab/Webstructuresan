"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const chat_routes_1 = __importDefault(require("./routes/chat.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // frontend dev
    credentials: false,
}));
app.use(express_1.default.json());
// Rutas
app.use("/api/chat", chat_routes_1.default);
app.get("/", (_req, res) => {
    res.json({ ok: true, message: "StructureScan API" });
});
app.listen(PORT, () => {
    console.log(`🛠️  Backend StructureScan escuchando en http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map