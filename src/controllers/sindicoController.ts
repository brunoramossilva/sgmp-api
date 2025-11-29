import { Request, Response } from "express";
import { SindicoRepository } from "../repositories/sindicoRepository";

const sindicoRepository = new SindicoRepository();

export class SindicoController {
  async create(req: Request, res: Response) {
    try {
      const sindico = await sindicoRepository.create(req.body);
      console.log("Síndico criado com sucesso:", sindico.cpf_sindico);
      res.json(sindico);
    } catch (error) {
      console.error("Erro ao criar síndico:", error);
      res.status(500).json({ error: "Erro ao criar síndico" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const sindicos = await sindicoRepository.findAll();
      console.log("Listagem de síndicos realizada com sucesso");
      res.json(sindicos);
    } catch (error) {
      console.error("Erro ao listar síndicos:", error);
      res.status(500).json({ error: "Erro ao listar síndicos" });
    }
  }

  async getByCpf(req: Request, res: Response) {
    try {
      const sindico = await sindicoRepository.findByCpf(req.params.cpf);
      console.log("Síndico encontrado:", req.params.cpf);
      res.json(sindico);
    } catch (error) {
      console.error("Erro ao buscar síndico:", error);
      res.status(500).json({ error: "Erro ao buscar síndico" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await sindicoRepository.delete(req.params.cpf);
      console.log("Síndico removido com sucesso:", req.params.cpf);
      res.json({ message: "Síndico removido" });
    } catch (error) {
      console.error("Erro ao remover síndico:", error);
      res.status(500).json({ error: "Erro ao remover síndico" });
    }
  }
}
