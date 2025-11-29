import { Request, Response } from "express";
import { OrdemServicoRepository } from "../repositories/ordemServicoRepository";

const ordemServicoRepository = new OrdemServicoRepository();

export class OrdemServicoController {
  async create(req: Request, res: Response) {
    try {
      const ordemServico = await ordemServicoRepository.create(req.body);
      console.log("Ordem de serviço criada com sucesso:", ordemServico.id);
      res.json(ordemServico);
    } catch (error) {
      console.error("Erro ao criar ordem de serviço:", error);
      res.status(500).json({ error: "Erro ao criar ordem de serviço" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const ordensServico = await ordemServicoRepository.findAll();
      console.log("Listagem de ordens de serviço realizada com sucesso");
      res.json(ordensServico);
    } catch (error) {
      console.error("Erro ao listar ordens de serviço:", error);
      res.status(500).json({ error: "Erro ao listar ordens de serviço" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const ordemServico = await ordemServicoRepository.findById(
        parseInt(req.params.id)
      );
      console.log("Ordem de serviço encontrada:", req.params.id);
      res.json(ordemServico);
    } catch (error) {
      console.error("Erro ao buscar ordem de serviço:", error);
      res.status(500).json({ error: "Erro ao buscar ordem de serviço" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const ordemServico = await ordemServicoRepository.update(
        parseInt(req.params.id),
        req.body
      );
      console.log("Ordem de serviço atualizada com sucesso:", req.params.id);
      res.json(ordemServico);
    } catch (error) {
      console.error("Erro ao atualizar ordem de serviço:", error);
      res.status(500).json({ error: "Erro ao atualizar ordem de serviço" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await ordemServicoRepository.delete(parseInt(req.params.id));
      console.log("Ordem de serviço removida com sucesso:", req.params.id);
      res.json({ message: "Ordem de serviço removida" });
    } catch (error) {
      console.error("Erro ao remover ordem de serviço:", error);
      res.status(500).json({ error: "Erro ao remover ordem de serviço" });
    }
  }
}
