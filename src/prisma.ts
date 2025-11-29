import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

const adapter = new PrismaPg(client);
const prisma = new PrismaClient({ adapter });

export default prisma;
