import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { email: 'demo@aic.local' },
    update: {},
    create: { email: 'demo@aic.local', password: 'hashed-demo' },
  });
}
main().finally(() => prisma.$disconnect());
