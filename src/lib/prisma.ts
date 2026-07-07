import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createClient() {
  const url = process.env.DATABASE_URL || "postgresql://localhost:5432/placeholder";
  const adapter = new PrismaPg({ connectionString: url });
  return new PrismaClient({
    adapter,
    transactionOptions: {
      maxWait: 10_000,
      timeout: 30_000,
    },
  });
}

export const prisma =
  globalForPrisma.prisma ?? (globalForPrisma.prisma = createClient());
