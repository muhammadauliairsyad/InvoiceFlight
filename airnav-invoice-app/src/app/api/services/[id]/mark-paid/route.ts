import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const service = await prisma.flightService.update({
    where: { id: params.id },
    data: { paymentStatus: "PAID" }
  });

  return NextResponse.json({ service });
}
