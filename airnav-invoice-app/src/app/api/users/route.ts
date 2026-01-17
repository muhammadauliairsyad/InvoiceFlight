import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { userSchema } from "@/validators/user.schema";
import { hashPassword } from "@/lib/auth/password";

export async function GET() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true, createdAt: true }
  });
  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = userSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const passwordHash = await hashPassword(parsed.data.password);

  const user = await prisma.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      role: parsed.data.role,
      passwordHash
    }
  });

  return NextResponse.json({ user });
}
