import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';

export default function sessionKeeper(request: NextRequest) {
  const response = NextResponse.next()

  // Check if the session cookie is already set
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('session');
  if (!hasCookie) {
    // Generate a new session cookie
    const session = generateNewUserToken()
    // Set the session cookie
    response.cookies.set('session', session, { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) });
  }
  return response
}

function generateNewUserToken() {
  // Generate a new UUID
  const uuid = uuidv4();

  // Return the generated UUID
  return uuid;
}
