import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes";

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // frontend dev
    credentials: false,
  })
);
app.use(express.json());

// Rutas
app.use("/api/chat", chatRoutes);

app.get("/", (_req, res) => {
  res.json({ ok: true, message: "StructureScan API" });
});

app.listen(PORT, () => {
  console.log(`🛠️  Backend StructureScan escuchando en http://localhost:${PORT}`);
});
