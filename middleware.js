import { NextResponse } from "next/server";

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const WIP_PATH = "/work-in-progress";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // In production, redirect everything except the WIP page itself (and static assets)
  if (IS_PRODUCTION && pathname !== WIP_PATH) {
    return NextResponse.rewrite(new URL(WIP_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except _next internals, api, and static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
  ],
};
