import prisma from "../prisma";
import { Prisma } from "@prisma/client";

export class OrdemServicoRepository {
  create(data: { descricao: string; cpf_morador: string }) {
    return prisma.ordemServico.create({
      data,
      include: {
        morador: {
          include: {
            usuario: true,
          },
        },
        sindico: {
          include: {
            usuario: {
              include: {
                morador: true,
              },
            },
          },
        },
        executor: {
          include: {
            usuario: true,
          },
        },
      },
    });
  }

  findAll() {
    return prisma.ordemServico.findMany({
      include: {
        morador: {
          include: {
            usuario: true,
          },
        },
        sindico: {
          include: {
            usuario: true,
          },
        },
        executor: {
          include: {
            usuario: true,
          },
        },
      },
    });
  }

  findById(id: number) {
    return prisma.ordemServico.findUnique({
      where: { id },
      include: {
        morador: {
          include: {
            usuario: true,
          },
        },
        sindico: {
          include: {
            usuario: true,
          },
        },
        executor: {
          include: {
            usuario: true,
          },
        },
      },
    });
  }

  update(id: number, data: Prisma.OrdemServicoUpdateInput) {
    return prisma.ordemServico.update({
      where: { id },
      data,
      include: {
        morador: {
          include: {
            usuario: true,
          },
        },
        sindico: {
          include: {
            usuario: true,
          },
        },
        executor: {
          include: {
            usuario: true,
          },
        },
      },
    });
  }

  delete(id: number) {
    return prisma.ordemServico.delete({ where: { id } });
  }
}
