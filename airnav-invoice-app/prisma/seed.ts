import { PrismaClient, Role } from "@prisma/client";
import { hashPassword } from "../src/lib/auth/password";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@airnav.local";
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (existing) {
    console.log("Admin already exists.");
    return;
  }

  const passwordHash = await hashPassword("ChangeMe123!");

  await prisma.user.create({
    data: {
      email: adminEmail,
      name: "Administrator",
      passwordHash,
      role: Role.ADMIN
    }
  });

  console.log("Admin created with default password ChangeMe123!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
