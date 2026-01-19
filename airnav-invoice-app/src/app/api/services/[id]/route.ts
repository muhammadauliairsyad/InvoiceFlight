import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const service = await prisma.flightService.findUnique({ where: { id: params.id } });
  return NextResponse.json({ service });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const service = await prisma.flightService.update({ where: { id: params.id }, data: body });
  return NextResponse.json({ service });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.flightService.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
