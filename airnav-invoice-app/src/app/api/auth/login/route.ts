import { NextResponse } from "next/server";
import { authenticate } from "@/lib/auth/session";

export async function POST(request: Request) {
  const body = await request.json();
  const user = await authenticate(body.email, body.password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ user });
}
