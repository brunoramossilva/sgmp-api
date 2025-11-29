import { Request, Response } from "express";
import { MoradorRepository } from "../repositories/moradorRepository";

const moradorRepository = new MoradorRepository();

export class MoradorController {
  async create(req: Request, res: Response) {
    try {
      const morador = await moradorRepository.create(req.body);
      console.log("Morador criado com sucesso:", morador.cpf);
      res.json(morador);
    } catch (error) {
      console.error("Erro ao criar morador:", error);
      res.status(500).json({ error: "Erro ao criar morador" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const moradores = await moradorRepository.findAll();
      console.log("Listagem de moradores realizada com sucesso");
      res.json(moradores);
    } catch (error) {
      console.error("Erro ao listar moradores:", error);
      res.status(500).json({ error: "Erro ao listar moradores" });
    }
  }

  async getByCpf(req: Request, res: Response) {
    try {
      const morador = await moradorRepository.findByCpf(req.params.cpf);
      console.log("Morador encontrado:", req.params.cpf);
      res.json(morador);
    } catch (error) {
      console.error("Erro ao buscar morador:", error);
      res.status(500).json({ error: "Erro ao buscar morador" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const morador = await moradorRepository.update(req.params.cpf, req.body);
      console.log("Morador atualizado com sucesso:", req.params.cpf);
      res.json(morador);
    } catch (error) {
      console.error("Erro ao atualizar morador:", error);
      res.status(500).json({ error: "Erro ao atualizar morador" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await moradorRepository.delete(req.params.cpf);
      console.log("Morador removido com sucesso:", req.params.cpf);
      res.json({ message: "Morador removido" });
    } catch (error) {
      console.error("Erro ao remover morador:", error);
      res.status(500).json({ error: "Erro ao remover morador" });
    }
  }
}
