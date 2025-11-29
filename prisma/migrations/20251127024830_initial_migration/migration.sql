-- CreateEnum
CREATE TYPE "Papel" AS ENUM ('MORADOR', 'FUNCIONARIO', 'SINDICO');

-- CreateTable
CREATE TABLE "Usuario" (
    "cpf" CHAR(11) NOT NULL,
    "senha" TEXT NOT NULL,
    "papel" "Papel" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Morador" (
    "cpf" CHAR(11) NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" CHAR(11) NOT NULL,

    CONSTRAINT "Morador_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "cpf" CHAR(11) NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" CHAR(11) NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Sindico" (
    "cpf_sindico" CHAR(11) NOT NULL,

    CONSTRAINT "Sindico_pkey" PRIMARY KEY ("cpf_sindico")
);

-- CreateTable
CREATE TABLE "OrdemServico" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataAbertura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataConclusao" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'ABERTA',
    "aprovado" BOOLEAN NOT NULL DEFAULT false,
    "cpf_morador" TEXT NOT NULL,
    "cpf_sindico" TEXT,
    "cpf_funcionario" TEXT,

    CONSTRAINT "OrdemServico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Morador" ADD CONSTRAINT "Morador_cpf_fkey" FOREIGN KEY ("cpf") REFERENCES "Usuario"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_cpf_fkey" FOREIGN KEY ("cpf") REFERENCES "Usuario"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sindico" ADD CONSTRAINT "Sindico_cpf_sindico_fkey" FOREIGN KEY ("cpf_sindico") REFERENCES "Usuario"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_cpf_morador_fkey" FOREIGN KEY ("cpf_morador") REFERENCES "Morador"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_cpf_sindico_fkey" FOREIGN KEY ("cpf_sindico") REFERENCES "Sindico"("cpf_sindico") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_cpf_funcionario_fkey" FOREIGN KEY ("cpf_funcionario") REFERENCES "Funcionario"("cpf") ON DELETE SET NULL ON UPDATE CASCADE;
