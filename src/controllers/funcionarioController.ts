import { Request, Response } from "express";
import { FuncionarioRepository } from "../repositories/funcionarioRepository";

const funcionarioRepository = new FuncionarioRepository();

export class FuncionarioController {
  async create(req: Request, res: Response) {
    try {
      const funcionario = await funcionarioRepository.create(req.body);
      console.log("Funcionário criado com sucesso:", funcionario.cpf);
      res.json(funcionario);
    } catch (error) {
      console.error("Erro ao criar funcionário:", error);
      res.status(500).json({ error: "Erro ao criar funcionário" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const funcionarios = await funcionarioRepository.findAll();
      console.log("Listagem de funcionários realizada com sucesso");
      res.json(funcionarios);
    } catch (error) {
      console.error("Erro ao listar funcionários:", error);
      res.status(500).json({ error: "Erro ao listar funcionários" });
    }
  }

  async getByCpf(req: Request, res: Response) {
    try {
      const funcionario = await funcionarioRepository.findByCpf(req.params.cpf);
      console.log("Funcionário encontrado:", req.params.cpf);
      res.json(funcionario);
    } catch (error) {
      console.error("Erro ao buscar funcionário:", error);
      res.status(500).json({ error: "Erro ao buscar funcionário" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const funcionario = await funcionarioRepository.update(
        req.params.cpf,
        req.body
      );
      console.log("Funcionário atualizado com sucesso:", req.params.cpf);
      res.json(funcionario);
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error);
      res.status(500).json({ error: "Erro ao atualizar funcionário" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await funcionarioRepository.delete(req.params.cpf);
      console.log("Funcionário removido com sucesso:", req.params.cpf);
      res.json({ message: "Funcionário removido" });
    } catch (error) {
      console.error("Erro ao remover funcionário:", error);
      res.status(500).json({ error: "Erro ao remover funcionário" });
    }
  }
}
