import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '@/pages/api/lib/db';

export async function POST(request: NextRequest) {
    // verify that the request body is a valid JSON object with the required fields
    let body;
    try {
        body = JSON.parse(await request.text());
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); // Return a 400 Bad Request response
    }
    if (!body.rating || !body.tutorialId) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
    const cookieName = 'session';
    if (!request.cookies.has(cookieName)) {
        return NextResponse.json({ error: 'Could not find session cookie in request' }, { status: 401 })
    }
    const sessionCookie = request.cookies.get(cookieName)?.value;

    const entry = { uuid: sessionCookie, rating: body.rating, tutorialId: body.tutorialId, timestamp: new Date() };

    // Connect to the database and insert the comment object into the comments collection
    const client: MongoClient = await clientPromise;
    const db = client.db('emojiScale');

    try {
        // Use updateOne with upsert:true to either update an existing entry or insert a new one
        const filter = { uuid: sessionCookie, tutorialId: body.tutorialId };
        const update = { $set: { rating: body.rating, timestamp: new Date() } };
        const options = { upsert: true }; // This option creates a new document if no documents match the filter
        const result = await db.collection('rating').updateOne(filter, update, options);

        if (result.matchedCount === 0 && result.upsertedCount === 1) {
            return NextResponse.json({ message: 'Rating added successfully' }, { status: 200 });
        } else if (result.matchedCount === 1) {
            return NextResponse.json({ message: 'Rating updated successfully' }, { status: 200 });
        } else {
            // Handle unexpected outcome
            return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Could not process rating in database' }, { status: 500 });
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

   // Connect to the database and fetch the rating
   const client: MongoClient = await clientPromise;
   const db = client.db('emojiScale');

   try {
       var entry = await db.collection('rating').findOne({ tutorialId: tutorialId, uuid: sessionCookie})
        // If no rating is found, return a default value of 100
        if (!entry) {
            return NextResponse.json({ rating: 100 }, { status: 200 });
        }
        return NextResponse.json({ rating: entry.rating }, { status: 200 });
   } catch (error) {
       return NextResponse.json({ error: 'Could not fetch rating from database' }, { status: 500 });
   }
}
