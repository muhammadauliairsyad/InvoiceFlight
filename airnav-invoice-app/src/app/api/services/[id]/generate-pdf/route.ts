import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { generateReceiptPdf } from "@/lib/pdf/generateReceipt";
import { generateBreakdownPdf } from "@/lib/pdf/generateBreakdown";
import { mergeCombined } from "@/lib/pdf/mergeCombined";
import { savePdf } from "@/lib/pdf/storage";
import { formatInTimeZone } from "date-fns-tz";

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const service = await prisma.flightService.findUnique({ where: { id: params.id } });

  if (!service) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const durationText = formatInTimeZone(service.serviceEndUtc, "UTC", "HH:mm:ss");

  const receiptBytes = await generateReceiptPdf({
    receiptNo: service.receiptNo,
    date: service.ataUtc,
    receivedFrom: service.airlineOperatorGh,
    amount: service.netTotal,
    payment: `${service.advanceExtend} CHARGES`,
    amountPaid: service.netTotal
  });

  const rows = [
    service.useApp
      ? {
          unit: "APP",
          start: service.serviceStartUtc.toISOString(),
          end: service.serviceEndUtc.toISOString(),
          duration: durationText,
          rate: 822000,
          gross: service.billableHours * 822000
        }
      : null,
    service.useTwr
      ? {
          unit: "TWR",
          start: service.serviceStartUtc.toISOString(),
          end: service.serviceEndUtc.toISOString(),
          duration: durationText,
          rate: 575500,
          gross: service.billableHours * 575500
        }
      : null,
    service.useAfis
      ? {
          unit: "AFIS",
          start: service.serviceStartUtc.toISOString(),
          end: service.serviceEndUtc.toISOString(),
          duration: durationText,
          rate: 246500,
          gross: service.billableHours * 246500
        }
      : null
  ].filter(Boolean) as {
    unit: string;
    start: string;
    end: string;
    duration: string;
    rate: number;
    gross: number;
  }[];

  const breakdownBytes = await generateBreakdownPdf({
    receiptNo: service.receiptNo,
    date: service.ataUtc,
    airline: service.airlineOperatorGh,
    rows,
    grossTotal: service.grossTotal,
    ppn: service.ppn,
    netTotal: service.netTotal
  });

  const combinedBytes = await mergeCombined(receiptBytes, breakdownBytes);

  const receiptPath = await savePdf(receiptBytes, "receipt", `${service.receiptNo}.pdf`);
  const breakdownPath = await savePdf(breakdownBytes, "breakdown", `${service.receiptNo}.pdf`);
  const combinedPath = await savePdf(combinedBytes, "combined", `${service.receiptNo}.pdf`);

  return NextResponse.json({ receiptPath, breakdownPath, combinedPath });
}
