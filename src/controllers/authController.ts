import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/usuarioRepository";

const usuarioRepository = new UsuarioRepository();

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { cpf, senha } = req.body;

      // Validação básica
      if (!cpf || !senha) {
        return res.status(400).json({ error: "CPF e senha são obrigatórios" });
      }

      // Buscar usuário pelo CPF
      const usuario = await usuarioRepository.findByCpf(cpf);

      if (!usuario) {
        return res.status(401).json({ error: "CPF ou senha inválidos" });
      }

      // Verificar senha
      if (usuario.senha !== senha) {
        return res.status(401).json({ error: "CPF ou senha inválidos" });
      }

      // Login bem-sucedido
      console.log(
        "Login realizado com sucesso:",
        cpf,
        "- Papel:",
        usuario.papel
      );

      res.json({
        message: "Login realizado com sucesso",
        usuario: {
          cpf: usuario.cpf,
          papel: usuario.papel,
        },
      });
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      res.status(500).json({ error: "Erro ao realizar login" });
    }
  }
}
