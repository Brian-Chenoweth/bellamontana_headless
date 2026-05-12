import { NextResponse } from 'next/server';

const LEGACY_PHONE_PATH_SEGMENT = '(805) 756-1131';
const LEGACY_PHONE_PATH_SEGMENT_ENCODED = '(805)%20756-1131';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  let decodedPathname = pathname;
  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch {
    decodedPathname = pathname;
  }

  if (
    pathname.includes(LEGACY_PHONE_PATH_SEGMENT_ENCODED) ||
    decodedPathname.includes(LEGACY_PHONE_PATH_SEGMENT)
  ) {
    return NextResponse.redirect(new URL('/', request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
