import { NextResponse, type NextRequest } from "next/server";
import { COMING_SOON } from "@/content/comingSoon";

/** While the "launching soon" cover is on, every page sends visitors to the cover at "/". */
export function proxy(request: NextRequest) {
  if (!COMING_SOON) return NextResponse.next();
  return NextResponse.redirect(new URL("/", request.url), 307);
}

export const config = {
  matcher: ["/work/:path*", "/about/:path*", "/kitchen/:path*", "/content/:path*", "/running/:path*", "/resources/:path*"],
};
