import { Request, Response } from "express";
import { SindicoRepository } from "../repositories/sindicoRepository";

const sindicoRepository = new SindicoRepository();

export class SindicoController {
  async create(req: Request, res: Response) {
    const sindico = await sindicoRepository.create(req.body);
    res.json(sindico);
  }

  async getAll(req: Request, res: Response) {
    const sindicos = await sindicoRepository.findAll();
    res.json(sindicos);
  }

  async getByCpf(req: Request, res: Response) {
    const sindico = await sindicoRepository.findByCpf(req.params.cpf);
    res.json(sindico);
  }

  async delete(req: Request, res: Response) {
    await sindicoRepository.delete(req.params.cpf);
    res.json({ message: "Síndico removido" });
  }
}
