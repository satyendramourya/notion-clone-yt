import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    const { data: { session }, } = await supabase.auth.getSession();

    // if account is not verified, redirect to login, signup
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login'&&'/signup'))
        }
    }

    //email verifications link expires.
    const emailLinkError = 'Emaiil link is invalid or has expired';

    if (
        req.nextUrl.searchParams.get('error_description') === emailLinkError && req.nextUrl.pathname !== '/signup'
    ) {
        return NextResponse.redirect(
            new URL(
                `/signup?error_description=${req.nextUrl.searchParams.get('error_description')}`, req.url
            )
        );
    }


    // if account is verified, redirect to dashboard
    if (['/login', '/signup'].includes(req.nextUrl.pathname)) {
        if (session) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
    }

    return res;
}