import { PrismaClient } from "@prisma/client";
import { RECEIPT_PREFIX } from "../config/constants";
import { formatInTimeZone } from "date-fns-tz";

export async function generateReceiptNo({
  prisma,
  flightType,
  ataUtc
}: {
  prisma: PrismaClient;
  flightType: "DOM" | "INT";
  ataUtc: Date;
}) {
  const code = flightType === "DOM" ? 21 : 22;
  const year = Number(formatInTimeZone(ataUtc, "Asia/Jakarta", "yyyy"));
  const month = Number(formatInTimeZone(ataUtc, "Asia/Jakarta", "MM"));

  const counter = await prisma.$transaction(async (tx) => {
    const existing = await tx.receiptCounter.upsert({
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

    return existing.current;
  });

  const running = String(counter).padStart(4, "0");
  const monthText = String(month).padStart(2, "0");

  return `${RECEIPT_PREFIX}.${code}.${year}.${monthText}.${running}`;
}
