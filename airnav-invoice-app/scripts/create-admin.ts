import { PrismaClient, Role } from "@prisma/client";
import { hashPassword } from "../src/lib/auth/password";

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2] ?? "admin@airnav.local";
  const password = process.argv[3] ?? "ChangeMe123!";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("User already exists.");
    return;
  }

  const passwordHash = await hashPassword(password);
  await prisma.user.create({
    data: {
      email,
      name: "Administrator",
      passwordHash,
      role: Role.ADMIN
    }
  });

  console.log("Admin created:", email);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
