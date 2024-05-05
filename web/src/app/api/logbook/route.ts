import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
    const cookieName = 'session';
    if (!request.cookies.has(cookieName)) {
        return NextResponse.json({ error: 'Could not find session cookie in request' }, { status: 401 })
    }
    const sessionCookie = request.cookies.get(cookieName)?.value;
    const requestBody = request.body;

    // Check if the request body is a valid JSON object with the required fields
    if (true) {
        const body = await request.text();
        // const body = await request.json();
        console.log(body);

        // Return a 200 OK response
        return NextResponse.json({ message: 'Activity logged successfully' });
    }
    else {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); // Return a 400 Bad Request response
    }
};
