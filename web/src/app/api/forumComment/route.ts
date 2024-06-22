import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '../../../pages/api/lib/db';

export async function POST(request: NextRequest) {

    // verify that the request body is a valid JSON object with the required fields
    let body;
    try {
        body = JSON.parse(await request.text());
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
    if (!body.tutorialId || !body.comment) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
    const cookieName = 'session';
    if (!request.cookies.has(cookieName)) {
        return NextResponse.json({ error: 'Could not find session cookie in request' }, { status: 401 })
    }
    const sessionCookie = request.cookies.get(cookieName)?.value;

    const entry = { tutorialId: body.tutorialId, comment: body.comment, uuid: sessionCookie, timestamp: new Date() };

    // Connect to the database and insert the comment object into the comments collection
    const client: MongoClient = await clientPromise;
    const db = client.db('comments');

    try {
        // Example: Insert comment into the database
        const result = await db.collection('comments').insertOne(entry);
        return NextResponse.json({ message: 'Comment added succesfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Could not add comment to database' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
     // Extract tutorialId from query parameters
    const url = new URL(request.url);
    const tutorialId = url.searchParams.get("tutorialId");

    if (!tutorialId) {
        return NextResponse.json({ error: 'Invalid request, tutorialId is required' }, { status: 400 });
    }

    const cookieName = 'session';
    if (!request.cookies.has(cookieName)) {
        return NextResponse.json({ error: 'Could not find session cookie in request' }, { status: 401 })
    }
    const sessionCookie = request.cookies.get(cookieName)?.value;

    // Connect to the database and fetch the comments from the comments collection
    const client: MongoClient = await clientPromise;
    const db = client.db('comments');

    try {
        // Example: Fetch comments from the database
        var comments = await db.collection('comments').find({ tutorialId: tutorialId }).toArray();
        //We want to remove the uuid from all comments except the user's own comments
        comments.forEach(comment => {
            if (comment.uuid !== sessionCookie) {
                delete comment.uuid;
            }
        });
        return NextResponse.json({ comments: comments }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Could not fetch comments from database' }, { status: 500 });
    }
}
