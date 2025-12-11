import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Limpar dados existentes
  await prisma.ordemServico.deleteMany();
  await prisma.sindico.deleteMany();
  await prisma.funcionario.deleteMany();
  await prisma.morador.deleteMany();
  await prisma.usuario.deleteMany();

  // Usuários
  await prisma.usuario.createMany({
    data: [
      // Moradores
      { cpf: "11111111111", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "22222222222", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "33333333333", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "44444444444", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "55555555555", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "66666666666", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "77777777777", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "88888888888", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "99999999999", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "10101010101", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "12121212121", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "13131313131", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "14141414141", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "15151515151", senha: "Sgmp@2025", papel: "MORADOR" },
      { cpf: "16161616161", senha: "Sgmp@2025", papel: "MORADOR" },

      // Funcionários
      { cpf: "20202020202", senha: "Sgmp@2025", papel: "FUNCIONARIO" },
      { cpf: "21212121212", senha: "Sgmp@2025", papel: "FUNCIONARIO" },
      { cpf: "23232323232", senha: "Sgmp@2025", papel: "FUNCIONARIO" },
      { cpf: "24242424242", senha: "Sgmp@2025", papel: "FUNCIONARIO" },
      { cpf: "25252525252", senha: "Sgmp@2025", papel: "FUNCIONARIO" },

      // Síndicos (também são moradores)
      { cpf: "30303030303", senha: "Sgmp@2025", papel: "SINDICO" },
      { cpf: "31313131313", senha: "Sgmp@2025", papel: "SINDICO" },
    ],
  });

  // Moradores
  await prisma.morador.createMany({
    data: [
      { cpf: "11111111111", nome: "João Silva", telefone: "81987654321" },
      { cpf: "22222222222", nome: "Maria Santos", telefone: "81987654322" },
      { cpf: "33333333333", nome: "Pedro Oliveira", telefone: "81987654323" },
      { cpf: "44444444444", nome: "Ana Costa", telefone: "81987654324" },
      { cpf: "55555555555", nome: "Carlos Souza", telefone: "81987654325" },
      { cpf: "66666666666", nome: "Juliana Lima", telefone: "81987654326" },
      { cpf: "77777777777", nome: "Ricardo Alves", telefone: "81987654327" },
      { cpf: "88888888888", nome: "Fernanda Rocha", telefone: "81987654328" },
      { cpf: "99999999999", nome: "Bruno Martins", telefone: "81987654329" },
      { cpf: "10101010101", nome: "Camila Ferreira", telefone: "81987654330" },
      { cpf: "12121212121", nome: "Diego Barbosa", telefone: "81987654331" },
      { cpf: "13131313131", nome: "Larissa Mendes", telefone: "81987654332" },
      { cpf: "14141414141", nome: "Rafael Gomes", telefone: "81987654333" },
      { cpf: "15151515151", nome: "Patricia Dias", telefone: "81987654334" },
      { cpf: "16161616161", nome: "Lucas Carvalho", telefone: "81987654335" },

      // Moradores que são síndicos
      { cpf: "30303030303", nome: "Roberto Andrade", telefone: "81987654340" },
      { cpf: "31313131313", nome: "Beatriz Moreira", telefone: "81987654341" },
    ],
  });

  // Funcionários
  await prisma.funcionario.createMany({
    data: [
      { cpf: "20202020202", nome: "José Pereira", telefone: "81988887771" },
      { cpf: "21212121212", nome: "Amanda Cardoso", telefone: "81988887772" },
      {
        cpf: "23232323232",
        nome: "Thiago Nascimento",
        telefone: "81988887773",
      },
      { cpf: "24242424242", nome: "Gabriela Pinto", telefone: "81988887774" },
      { cpf: "25252525252", nome: "Marcos Ribeiro", telefone: "81988887775" },
    ],
  });

  // Síndicos
  await prisma.sindico.createMany({
    data: [{ cpf_sindico: "30303030303" }, { cpf_sindico: "31313131313" }],
  });

  // Ordens de Serviço
  await prisma.ordemServico.createMany({
    data: [
      // Ordens pendentes de aprovação
      {
        descricao: "Trocar lâmpada queimada no corredor do 3º andar",
        cpf_morador: "11111111111",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-09"),
      },
      {
        descricao: "Consertar vazamento na caixa d'água",
        cpf_morador: "22222222222",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-08"),
      },
      {
        descricao: "Reparar porta da garagem que está travando",
        cpf_morador: "33333333333",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-10"),
      },
      {
        descricao: "Limpar calhas do prédio",
        cpf_morador: "44444444444",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-07"),
      },
      {
        descricao: "Trocar fechadura do portão principal",
        cpf_morador: "55555555555",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-11"),
      },

      // Ordens aprovadas aguardando execução
      {
        descricao: "Pintar parede da área de lazer",
        cpf_morador: "66666666666",
        cpf_sindico: "30303030303",
        status: "AGUARDANDO_EXECUCAO",
        dataAbertura: new Date("2025-12-01"),
      },
      {
        descricao: "Instalar nova luminária na entrada",
        cpf_morador: "77777777777",
        cpf_sindico: "30303030303",
        status: "AGUARDANDO_EXECUCAO",
        dataAbertura: new Date("2025-11-28"),
      },
      {
        descricao: "Consertar interfone do apartamento 301",
        cpf_morador: "88888888888",
        cpf_sindico: "31313131313",
        status: "AGUARDANDO_EXECUCAO",
        dataAbertura: new Date("2025-12-03"),
      },
      {
        descricao: "Substituir tomadas antigas da área comum",
        cpf_morador: "99999999999",
        cpf_sindico: "30303030303",
        status: "AGUARDANDO_EXECUCAO",
        dataAbertura: new Date("2025-11-25"),
      },
      {
        descricao: "Reparar rachadura na parede externa",
        cpf_morador: "10101010101",
        cpf_sindico: "31313131313",
        status: "AGUARDANDO_EXECUCAO",
        dataAbertura: new Date("2025-12-05"),
      },

      // Ordens em execução
      {
        descricao: "Trocar piso quebrado da entrada",
        cpf_morador: "12121212121",
        cpf_sindico: "30303030303",
        cpf_funcionario: "20202020202",
        status: "EM_EXECUCAO",
        dataAbertura: new Date("2025-11-22"),
      },
      {
        descricao: "Consertar torneira com vazamento no térreo",
        cpf_morador: "13131313131",
        cpf_sindico: "31313131313",
        cpf_funcionario: "21212121212",
        status: "EM_EXECUCAO",
        dataAbertura: new Date("2025-11-30"),
      },
      {
        descricao: "Reparar motor do portão automático",
        cpf_morador: "14141414141",
        cpf_sindico: "30303030303",
        cpf_funcionario: "23232323232",
        status: "EM_EXECUCAO",
        dataAbertura: new Date("2025-12-02"),
      },
      {
        descricao: "Instalar câmera de segurança adicional",
        cpf_morador: "15151515151",
        cpf_sindico: "31313131313",
        cpf_funcionario: "24242424242",
        status: "EM_EXECUCAO",
        dataAbertura: new Date("2025-11-20"),
      },
      {
        descricao: "Limpar caixa de gordura",
        cpf_morador: "16161616161",
        cpf_sindico: "30303030303",
        cpf_funcionario: "25252525252",
        status: "EM_EXECUCAO",
        dataAbertura: new Date("2025-12-04"),
      },

      // Ordens concluídas
      {
        descricao: "Troca de lâmpadas do estacionamento",
        cpf_morador: "11111111111",
        cpf_sindico: "30303030303",
        cpf_funcionario: "20202020202",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-08-10"),
        dataConclusao: new Date("2025-08-15"),
      },
      {
        descricao: "Manutenção preventiva do elevador",
        cpf_morador: "22222222222",
        cpf_sindico: "31313131313",
        cpf_funcionario: "21212121212",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-08-28"),
        dataConclusao: new Date("2025-09-03"),
      },
      {
        descricao: "Desentupimento de ralo da área de serviço",
        cpf_morador: "33333333333",
        cpf_sindico: "30303030303",
        cpf_funcionario: "23232323232",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-09-25"),
        dataConclusao: new Date("2025-09-28"),
      },
      {
        descricao: "Pintura das grades da varanda",
        cpf_morador: "44444444444",
        cpf_sindico: "31313131313",
        cpf_funcionario: "24242424242",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-10-05"),
        dataConclusao: new Date("2025-10-12"),
      },
      {
        descricao: "Instalação de corrimão na escada",
        cpf_morador: "55555555555",
        cpf_sindico: "30303030303",
        cpf_funcionario: "25252525252",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-10-18"),
        dataConclusao: new Date("2025-10-25"),
      },
      {
        descricao: "Reparo na rede elétrica do salão de festas",
        cpf_morador: "66666666666",
        cpf_sindico: "31313131313",
        cpf_funcionario: "20202020202",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-10-30"),
        dataConclusao: new Date("2025-11-05"),
      },
      {
        descricao: "Troca de telhas danificadas",
        cpf_morador: "77777777777",
        cpf_sindico: "30303030303",
        cpf_funcionario: "21212121212",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-11-10"),
        dataConclusao: new Date("2025-11-18"),
      },
      {
        descricao: "Conserto do porteiro eletrônico",
        cpf_morador: "88888888888",
        cpf_sindico: "31313131313",
        cpf_funcionario: "23232323232",
        status: "CONCLUIDA",
        dataAbertura: new Date("2025-11-27"),
        dataConclusao: new Date("2025-12-02"),
      },

      // Mais ordens pendentes de aprovação
      {
        descricao: "Dedetização das áreas comuns",
        cpf_morador: "99999999999",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-06"),
      },
      {
        descricao: "Verificar sistema de aquecimento da piscina",
        cpf_morador: "10101010101",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-11-29"),
      },
      {
        descricao: "Reparar fissura no teto da garagem",
        cpf_morador: "12121212121",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-05"),
      },
      {
        descricao: "Trocar vidro quebrado da porta de entrada",
        cpf_morador: "13131313131",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-10"),
      },
      {
        descricao: "Instalar sensor de presença no corredor",
        cpf_morador: "14141414141",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-09"),
      },
      {
        descricao: "Limpar reservatório de água",
        cpf_morador: "15151515151",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-03"),
      },
      {
        descricao: "Consertar campainha do apartamento 205",
        cpf_morador: "16161616161",
        status: "PENDENTE_APROVACAO",
        dataAbertura: new Date("2025-12-11"),
      },

      // Ordens recusadas pelo síndico
      {
        descricao: "Instalar sauna no salão de festas",
        cpf_morador: "11111111111",
        cpf_sindico: "30303030303",
        status: "RECUSADA",
        dataAbertura: new Date("2025-10-15"),
      },
      {
        descricao: "Colocar piso de mármore na entrada",
        cpf_morador: "22222222222",
        cpf_sindico: "31313131313",
        status: "RECUSADA",
        dataAbertura: new Date("2025-09-20"),
      },
      {
        descricao: "Construir churrasqueira na varanda do apartamento",
        cpf_morador: "33333333333",
        cpf_sindico: "30303030303",
        status: "RECUSADA",
        dataAbertura: new Date("2025-11-05"),
      },
      {
        descricao: "Pintar fachada do prédio de vermelho",
        cpf_morador: "44444444444",
        cpf_sindico: "31313131313",
        status: "RECUSADA",
        dataAbertura: new Date("2025-10-22"),
      },
      {
        descricao: "Ampliar vaga de garagem sem autorização",
        cpf_morador: "55555555555",
        cpf_sindico: "30303030303",
        status: "RECUSADA",
        dataAbertura: new Date("2025-11-12"),
      },
      {
        descricao: "Instalar antena parabólica gigante no telhado",
        cpf_morador: "66666666666",
        cpf_sindico: "31313131313",
        status: "RECUSADA",
        dataAbertura: new Date("2025-09-08"),
      },
    ],
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
