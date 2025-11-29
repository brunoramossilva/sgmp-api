import { PrismaClient, Papel } from "@prisma/client";

const prisma = new PrismaClient();

export class UsuarioRepository {
  create(data: { cpf: string; senha: string; papel: Papel }) {
    return prisma.usuario.create({ data });
  }

  findAll() {
    return prisma.usuario.findMany();
  }

  findByCpf(cpf: string) {
    return prisma.usuario.findUnique({ where: { cpf } });
  }

  update(cpf: string, data: Partial<{ senha: string; papel: Papel }>) {
    return prisma.usuario.update({ where: { cpf }, data });
  }

  delete(cpf: string) {
    return prisma.usuario.delete({ where: { cpf } });
  }
}
