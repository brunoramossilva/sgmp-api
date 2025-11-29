import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class FuncionarioRepository {
  create(data: { cpf: string; nome: string; telefone: string }) {
    return prisma.funcionario.create({
      data,
      include: { usuario: true },
    });
  }

  findAll() {
    return prisma.funcionario.findMany({
      include: { usuario: true },
    });
  }

  findByCpf(cpf: string) {
    return prisma.funcionario.findUnique({
      where: { cpf },
      include: { usuario: true },
    });
  }

  update(cpf: string, data: Partial<{ nome: string; telefone: string }>) {
    return prisma.funcionario.update({
      where: { cpf },
      data,
      include: { usuario: true },
    });
  }

  delete(cpf: string) {
    return prisma.funcionario.delete({ where: { cpf } });
  }
}
