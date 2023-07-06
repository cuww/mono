import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('test')
    //   return NextResponse.redirect(new URL('/home', request.url))
    return NextResponse.next({
        request,
    })
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/services/:path*',
}