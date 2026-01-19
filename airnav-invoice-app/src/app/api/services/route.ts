import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { serviceSchema } from "@/validators/service.schema";
import { calculateBilling } from "@/lib/calc/billing";
import { generateReceiptNo } from "@/lib/calc/receiptNo";

export async function GET() {
  const services = await prisma.flightService.findMany({
    orderBy: { ataUtc: "desc" }
  });

  return NextResponse.json({ services });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = serviceSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const serviceStartUtc = new Date(data.serviceStartUtc);
  const serviceEndUtc = new Date(data.serviceEndUtc);

  const billing = calculateBilling({
    serviceStartUtc,
    serviceEndUtc,
    useApp: data.useApp,
    useTwr: data.useTwr,
    useAfis: data.useAfis
  });

  const receiptNo = await generateReceiptNo({
    prisma,
    flightType: data.flightType,
    ataUtc: new Date(data.ataUtc)
  });

  const seqNo = (await prisma.flightService.count()) + 1;

  const service = await prisma.flightService.create({
    data: {
      seqNo,
      receiptNo,
      flightType: data.flightType,
      advanceExtend: data.advanceExtend,
      airlineOperatorGh: data.airlineOperatorGh,
      flightNumber: data.flightNumber,
      registration: data.registration,
      aircraftType: data.aircraftType,
      departure: data.departure,
      arrival: data.arrival,
      arrivalDate: new Date(data.arrivalDate),
      departureDate: new Date(data.departureDate),
      ataUtc: new Date(data.ataUtc),
      atdUtc: new Date(data.atdUtc),
      serviceStartUtc,
      serviceEndUtc,
      useApp: data.useApp,
      useTwr: data.useTwr,
      useAfis: data.useAfis,
      picDinas: data.picDinas,
      durationMinutes: billing.durationMinutes,
      billableHours: billing.billableHours,
      grossTotal: billing.grossTotal,
      ppn: billing.ppn,
      netTotal: billing.netTotal,
      createdById: body.createdById ?? ""
    }
  });

  return NextResponse.json({ service });
}
