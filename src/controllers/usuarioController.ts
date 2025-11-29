import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/usuarioRepository";

const userRepository = new UsuarioRepository();

export class UserController {
  async create(req: Request, res: Response) {
    const user = await userRepository.create(req.body);
    res.json(user);
  }

  async getAll(req: Request, res: Response) {
    const users = await userRepository.findAll();
    res.json(users);
  }

  async getByCpf(req: Request, res: Response) {
    const user = await userRepository.findByCpf(req.params.cpf);
    res.json(user);
  }

  async update(req: Request, res: Response) {
    const user = await userRepository.update(req.params.cpf, req.body);
    res.json(user);
  }

  async delete(req: Request, res: Response) {
    await userRepository.delete(req.params.cpf);
    res.json({ message: "Usuário removido" });
  }
}
