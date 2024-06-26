import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'


export default async function sessionKeeper(request: NextRequest) {
  const response = NextResponse.next()

  // Check if the session cookie is already set
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('session');
  if (!hasCookie) {
    // Generate a new session cookie
    const url = request.nextUrl.clone()
    url.pathname = '/api/uuid'
    const session = await generateNewUserToken(url)
    // Set the session cookie
    response.cookies.set('session', session, { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) });
  } else {
    // Workaround for devices that could access the site without before the latest modification about the session cookie
    // POST to /api/uuid
    const url = request.nextUrl.clone()
    url.pathname = `/api/uuid`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uuid: cookieStore.get('session')?.value }),
    })
  }
  return response
}

async function generateNewUserToken(apiRoute: any): Promise<string> {
  // fetch from /api/uuid
  const response = await fetch(apiRoute, {
    method: 'GET'
  })
  const data = await response.json()
  const uuid = data.uuid

  return uuid;
}
