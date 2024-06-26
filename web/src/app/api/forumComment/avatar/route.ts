import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '@/pages/api/lib/db';

export async function POST(request: NextRequest) {
    // verify that the request body is a valid JSON object with the required fields
    let body;
    try {
        body = JSON.parse(await request.text());
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
    if (!body.avatarConfig) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
    const cookieName = 'session';
    if (!request.cookies.has(cookieName)) {
        return NextResponse.json({ error: 'Could not find session cookie in request' }, { status: 401 })
    }
    const sessionCookie = request.cookies.get(cookieName)?.value;

    const entry = { uuid: sessionCookie, avatarConfig: body.avatarConfig };

    // Connect to the database and insert the comment object into the comments collection
    const client: MongoClient = await clientPromise;
    const db = client.db('comments');

    try {
        // Example: Insert comment into the database
        const result = await db.collection('avatars').insertOne(entry);
        return NextResponse.json({ message: 'avatar added succesfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Could not add avatar to database' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    const cookieName = 'session';
    if (!request.cookies.has(cookieName)) {
        return NextResponse.json({ error: 'Could not find session cookie in request' }, { status: 401 })
    }
    const uuid = request.cookies.get(cookieName)?.value;

    // Connect to the database and fetch the comments from the comments collection
    const client: MongoClient = await clientPromise;
    const db = client.db('comments');

    try {
        // Example: Fetch comments from the database
        const avatarConfig = await db.collection('avatars').findOne({ uuid: uuid });
        // generate a new avatarConfig if no document is found
        if (!avatarConfig) {
            return NextResponse.json({ error: "No avatar found for this user" }, { status: 200 });
        }
        return NextResponse.json({ avatarConfig: avatarConfig }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: 'Could not fetch comments from database' }, { status: 500 });
    }
}
