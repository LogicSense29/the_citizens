import { NextResponse } from "next/server";

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const WIP_PATH = "/work-in-progress";
const PREVIEW_SECRET = process.env.PREVIEW_SECRET || "preview123";

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Allow bypass with ?preview=<secret>
  const previewParam = searchParams.get("preview");
  const previewCookie = request.cookies.get("preview_access")?.value;

  if (previewParam === PREVIEW_SECRET) {
    const response = NextResponse.next();
    response.cookies.set("preview_access", PREVIEW_SECRET, { path: "/", httpOnly: true });
    return response;
  }

  if (IS_PRODUCTION && previewCookie !== PREVIEW_SECRET && pathname !== WIP_PATH) {
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
