import { prisma } from "./prisma";

export async function runTransaction<T>(fn: Parameters<typeof prisma.$transaction>[0]) {
  return prisma.$transaction(fn);
}
