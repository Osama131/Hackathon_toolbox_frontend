import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

export async function POST(request: NextApiRequest, response: NextResponse) {
    const sessionCookie = request.cookies.session;
    const requestBody = request.body;

    // Check if the request body is a valid JSON object with the required fields
    if (typeof requestBody === 'object' && requestBody.url && requestBody.duration && requestBody.date) {
        // Access the values of the fields
        const { url, duration, date } = requestBody;

        // Your logic here

        return new NextResponse; // End the response
    } else {
        // Handle invalid request body
        return response.status(400).send('Invalid request body');
    }
};
