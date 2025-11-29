import prisma from "../prisma";

export class MoradorRepository {
  create(data: { cpf: string; nome: string; telefone: string }) {
    return prisma.morador.create({
      data,
      include: { usuario: true },
    });
  }

  findAll() {
    return prisma.morador.findMany({
      include: { usuario: true },
    });
  }

  findByCpf(cpf: string) {
    return prisma.morador.findUnique({
      where: { cpf },
      include: { usuario: true },
    });
  }

  update(cpf: string, data: Partial<{ nome: string; telefone: string }>) {
    return prisma.morador.update({
      where: { cpf },
      data,
      include: { usuario: true },
    });
  }

  delete(cpf: string) {
    return prisma.morador.delete({ where: { cpf } });
  }
}
