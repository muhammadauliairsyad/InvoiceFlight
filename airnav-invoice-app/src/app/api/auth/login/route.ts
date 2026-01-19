import { NextResponse } from "next/server";
import { authenticate } from "@/lib/auth/session";

export async function POST(request: Request) {
  const body = await request.json();
  const user = await authenticate(body.email, body.password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ user });
  response.cookies.set("airnav_session", JSON.stringify({ id: user.id, role: user.role }), {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });

  return response;
  return NextResponse.json({ user });
}
