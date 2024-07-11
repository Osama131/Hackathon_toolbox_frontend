import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '@/pages/api/lib/db';

export async function GET(request: NextRequest) {
    // Extract tutorialId from query parameters
    const url = new URL(request.url);

    // Connect to the database and fetch the rating
    const client: MongoClient = await clientPromise;
    const db = client.db('events');

    try {
        const events = await db.collection('events').find().toArray();
        return NextResponse.json({ events }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Could not fetch events from database' }, { status: 500 });
    }
}


// POST add a new event
export async function POST(request: NextRequest) {
    // verify that the request body is a valid JSON object with the required fields
    let body;
    try {
        body = JSON.parse(await request.text());
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); // Return a 400 Bad Request response
    }

    if (!body.name || !body.owner || !body.startDate || !body.endDate) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
   
    
    // Connect to the database and insert the new object into the events collection. if another event with the same name and owner already exists, return a 409 Conflict response
    const client: MongoClient = await clientPromise;
    const db = client.db('events');

    try {
        const entry = { ...body, lastModified: new Date() };
    
        // Check if an event with the same name and owner already exists
        const existingEvent = await db.collection('events').findOne({ name: body.name});
    
        if (existingEvent) {
            // If an event with the same name and owner exists, return a 409 Conflict response
            return NextResponse.json({ error: 'Event with the same name and owner already exists' }, { status: 409 });
        } else {
            // If no existing event is found, insert the new event
            await db.collection('events').insertOne(entry);
            return NextResponse.json({ message: 'Event added successfully' }, { status: 201 });
        }
    } catch (error) {
        // Handle potential errors during database operations
        console.error('Database insertion error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}

// PUT update an event
export async function PUT(request: NextRequest) {
    // Extract tutorialId from query parameters
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    // verify that the request body is a valid JSON object with the required fields
    let body;
    try {
        body = JSON.parse(await request.text());
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); // Return a 400 Bad Request response
    }

    if (!body.name || !body.owner || !body.startDate || !body.endDate) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }

    // Connect to the database and update the event
    const client: MongoClient = await clientPromise;
    const db = client.db('events');

    try {
        const entry = { ...body, lastModified: new Date() };
    
        // Check if an event with the same name and owner already exists
        const existingEvent = await db.collection('events').findOne({ name: body.name});
    
        if (existingEvent) {
            // If an event with the same name and owner exists, return a 409 Conflict response
            return NextResponse.json({ error: 'Event with the same name and owner already exists' }, { status: 409 });
        } else {
            // If no existing event is found, update the event
            await db.collection('events').updateOne({ _id: id }, { $set: entry });
            return NextResponse.json({ message: 'Event updated successfully' }, { status: 200 });
        }
    } catch (error) {
        // Handle potential errors during database operations
        console.error('Database update error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
