import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./prisma";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
});

async function start() {
  try {
    await prisma.$connect();
    console.log("📦 Banco de dados conectado com sucesso!");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
    process.exit(1);
  }
}

start();
