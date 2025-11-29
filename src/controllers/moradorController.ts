import { Request, Response } from "express";
import { MoradorRepository } from "../repositories/moradorRepository";

const moradorRepository = new MoradorRepository();

export class MoradorController {
  async create(req: Request, res: Response) {
    const morador = await moradorRepository.create(req.body);
    res.json(morador);
  }

  async getAll(req: Request, res: Response) {
    const moradores = await moradorRepository.findAll();
    res.json(moradores);
  }

  async getByCpf(req: Request, res: Response) {
    const morador = await moradorRepository.findByCpf(req.params.cpf);
    res.json(morador);
  }

  async update(req: Request, res: Response) {
    const morador = await moradorRepository.update(req.params.cpf, req.body);
    res.json(morador);
  }

  async delete(req: Request, res: Response) {
    await moradorRepository.delete(req.params.cpf);
    res.json({ message: "Morador removido" });
  }
}
