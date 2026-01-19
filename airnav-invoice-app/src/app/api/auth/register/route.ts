import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { hashPassword } from "@/lib/auth/password";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.password) {
    return NextResponse.json({ error: "Nama, email, dan password wajib diisi." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email: body.email } });
  if (existing) {
    return NextResponse.json({ error: "Email sudah terdaftar." }, { status: 400 });
  }

  const passwordHash = await hashPassword(body.password);
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      passwordHash,
      role: "VIEWER"
    },
    select: { id: true, name: true, email: true, role: true }
  });

  return NextResponse.json({ user }, { status: 201 });
}
