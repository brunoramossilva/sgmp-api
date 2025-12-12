import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./prisma";
import routes from "./routes";

dotenv.config();

const app = express();

const PORT: number = parseInt(process.env.PORT ?? "3000", 10);

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
});

app.use(routes);

app.get("/db-test", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: "ok",
      message: "Banco respondeu normalmente!",
    });
  } catch (error) {
    res.status(500).json({
      status: "erro",
      message: "Falha ao comunicar com o banco",
      error,
    });
  }
});

async function start() {
  try {
    await prisma.$connect();
    console.log("📦 Banco de dados conectado com sucesso!");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Servidor rodando em http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
    process.exit(1);
  }
}

start();
