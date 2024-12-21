import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isSafeMode = process.env.SAFE_MODE === "true";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  const protectedRoutes = ["/dashboard", "/profile"];
  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isSafeMode) {
    if (isProtected) {
      return NextResponse.redirect(new URL("/safe-mode", req.url));
    }
  } else {
    if (isProtected && !token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], 
};
