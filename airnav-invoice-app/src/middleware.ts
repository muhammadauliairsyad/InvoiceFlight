import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get("airnav_session");
  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/users") || pathname.startsWith("/settings")) {
    const sessionValue = sessionCookie.value;
    try {
      const session = JSON.parse(sessionValue) as { role?: string };
      if (session.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/services/:path*", "/users/:path*", "/settings/:path*"]
};
