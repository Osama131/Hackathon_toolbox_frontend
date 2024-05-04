import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import sessionKeeper from './middleware/sessionKeeper'
 
export function middleware(request: NextRequest) {
    return sessionKeeper(request)
}
