import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const total = await prisma.flightService.aggregate({
    _sum: { grossTotal: true, netTotal: true },
    _count: { _all: true }
  });

  return NextResponse.json({
    totalGross: total._sum.grossTotal ?? 0,
    totalNet: total._sum.netTotal ?? 0,
    count: total._count._all ?? 0
  });
}
