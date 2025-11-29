import { Request, Response } from "express";
import { FuncionarioRepository } from "../repositories/funcionarioRepository";

const funcionarioRepository = new FuncionarioRepository();

export class FuncionarioController {
  async create(req: Request, res: Response) {
    const funcionario = await funcionarioRepository.create(req.body);
    res.json(funcionario);
  }

  async getAll(req: Request, res: Response) {
    const funcionarios = await funcionarioRepository.findAll();
    res.json(funcionarios);
  }

  async getByCpf(req: Request, res: Response) {
    const funcionario = await funcionarioRepository.findByCpf(req.params.cpf);
    res.json(funcionario);
  }

  async update(req: Request, res: Response) {
    const funcionario = await funcionarioRepository.update(
      req.params.cpf,
      req.body
    );
    res.json(funcionario);
  }

  async delete(req: Request, res: Response) {
    await funcionarioRepository.delete(req.params.cpf);
    res.json({ message: "Funcionário removido" });
  }
}
