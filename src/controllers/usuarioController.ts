import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/usuarioRepository";

const usuarioRepository = new UsuarioRepository();

export class UserController {
  async create(req: Request, res: Response) {
    const user = await usuarioRepository.create(req.body);
    res.json(user);
  }

  async getAll(req: Request, res: Response) {
    const users = await usuarioRepository.findAll();
    res.json(users);
  }

  async getByCpf(req: Request, res: Response) {
    const user = await usuarioRepository.findByCpf(req.params.cpf);
    res.json(user);
  }

  async update(req: Request, res: Response) {
    const user = await usuarioRepository.update(req.params.cpf, req.body);
    res.json(user);
  }

  async delete(req: Request, res: Response) {
    await usuarioRepository.delete(req.params.cpf);
    res.json({ message: "Usuário removido" });
  }
}
