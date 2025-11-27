import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Usuários
  await prisma.usuario.createMany({
    data: [
      { cpf: "00000000001", senha: "123456", papel: "MORADOR" },
      { cpf: "00000000002", senha: "123456", papel: "FUNCIONARIO" },
      { cpf: "00000000003", senha: "123456", papel: "SINDICO" },
    ],
    skipDuplicates: true,
  });

  // Morador
  await prisma.morador.create({
    data: {
      cpf: "00000000001",
      nome: "João da Silva",
      telefone: "81988887777",
    },
  });

  // Funcionário
  await prisma.funcionario.create({
    data: {
      cpf: "00000000002",
      nome: "Maria Oliveira",
      telefone: "81999998888",
    },
  });

  // Síndico
  await prisma.sindico.create({
    data: {
      cpf_sindico: "00000000003",
    },
  });

  // Ordem de serviço
  await prisma.ordemServico.create({
    data: {
      descricao: "Trocar lâmpada da garagem",
      cpf_morador: "00000000001",
      cpf_funcionario: "00000000002",
      cpf_sindico: "00000000003",
      aprovado: false,
    },
  });
}

main()
  .then(() => {
    console.log("🌱 Seed executado com sucesso!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
