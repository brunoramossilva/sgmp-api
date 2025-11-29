import { Request, Response } from "express";
import { OrdemServicoRepository } from "../repositories/ordemServicoRepository";

const ordemServicoRepository = new OrdemServicoRepository();

export class OrdemServicoController {
  async create(req: Request, res: Response) {
    const ordemServico = await ordemServicoRepository.create(req.body);
    res.json(ordemServico);
  }

  async getAll(req: Request, res: Response) {
    const ordensServico = await ordemServicoRepository.findAll();
    res.json(ordensServico);
  }

  async getById(req: Request, res: Response) {
    const ordemServico = await ordemServicoRepository.findById(
      parseInt(req.params.id)
    );
    res.json(ordemServico);
  }

  async update(req: Request, res: Response) {
    const ordemServico = await ordemServicoRepository.update(
      parseInt(req.params.id),
      req.body
    );
    res.json(ordemServico);
  }

  async delete(req: Request, res: Response) {
    await ordemServicoRepository.delete(parseInt(req.params.id));
    res.json({ message: "Ordem de serviço removida" });
  }
}
