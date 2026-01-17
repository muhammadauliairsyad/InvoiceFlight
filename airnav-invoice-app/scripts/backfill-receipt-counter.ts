import { PrismaClient } from "@prisma/client";
import { RECEIPT_PREFIX } from "../src/lib/config/constants";
import { formatInTimeZone } from "date-fns-tz";

const prisma = new PrismaClient();

async function main() {
  const services = await prisma.flightService.findMany();

  for (const service of services) {
    const code = service.flightType === "DOM" ? 21 : 22;
    const year = Number(formatInTimeZone(service.ataUtc, "Asia/Jakarta", "yyyy"));
    const month = Number(formatInTimeZone(service.ataUtc, "Asia/Jakarta", "MM"));

    await prisma.receiptCounter.upsert({
      where: {
        prefix_code_year_month: {
          prefix: RECEIPT_PREFIX,
          code,
          year,
          month
        }
      },
      update: {
        current: { increment: 1 }
      },
      create: {
        prefix: RECEIPT_PREFIX,
        code,
        year,
        month,
        current: 1
      }
    });
  }

  console.log("Receipt counters backfilled.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
