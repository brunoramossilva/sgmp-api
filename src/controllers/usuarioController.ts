import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/usuarioRepository";

const usuarioRepository = new UsuarioRepository();

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await usuarioRepository.create(req.body);
      console.log("Usuário criado com sucesso:", user.cpf);
      res.json(user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await usuarioRepository.findAll();
      console.log("Listagem de usuários realizada com sucesso");
      res.json(users);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      res.status(500).json({ error: "Erro ao listar usuários" });
    }
  }

  async getByCpf(req: Request, res: Response) {
    try {
      const user = await usuarioRepository.findByCpf(req.params.cpf);
      console.log("Usuário encontrado:", req.params.cpf);
      res.json(user);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = await usuarioRepository.update(req.params.cpf, req.body);
      console.log("Usuário atualizado com sucesso:", req.params.cpf);
      res.json(user);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await usuarioRepository.delete(req.params.cpf);
      console.log("Usuário removido com sucesso:", req.params.cpf);
      res.json({ message: "Usuário removido" });
    } catch (error) {
      console.error("Erro ao remover usuário:", error);
      res.status(500).json({ error: "Erro ao remover usuário" });
    }
  }
}
