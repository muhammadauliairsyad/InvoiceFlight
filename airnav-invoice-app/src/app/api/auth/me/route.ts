import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  const sessionMatch = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("airnav_session="));

  if (!sessionMatch) {
    return NextResponse.json({ user: null });
  }

  const sessionValue = decodeURIComponent(sessionMatch.split("=")[1] ?? "");
  try {
    const session = JSON.parse(sessionValue) as { id?: string };
    if (!session.id) return NextResponse.json({ user: null });
    const user = await prisma.user.findUnique({
      where: { id: session.id },
      select: { id: true, name: true, email: true, role: true }
    });
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ user: null });
  }
}
