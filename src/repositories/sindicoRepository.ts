import prisma from "../prisma";

export class SindicoRepository {
  create(data: { cpf_sindico: string }) {
    return prisma.sindico.create({
      data,
      include: {
        usuario: {
          include: {
            morador: true,
          },
        },
      },
    });
  }

  findAll() {
    return prisma.sindico.findMany({
      include: {
        usuario: {
          include: {
            morador: true,
          },
        },
      },
    });
  }

  findByCpf(cpf_sindico: string) {
    return prisma.sindico.findUnique({
      where: { cpf_sindico },
      include: {
        usuario: {
          include: {
            morador: true,
          },
        },
      },
    });
  }

  delete(cpf_sindico: string) {
    return prisma.sindico.delete({ where: { cpf_sindico } });
  }
}
