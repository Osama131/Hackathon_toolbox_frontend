import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '@/pages/api/lib/db';



// POST add a new event
export async function POST(request: NextRequest) {
    // verify that the request body is a valid JSON object with the required fields
    let body;
    try {
        body = JSON.parse(await request.text());
    } catch (error) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); // Return a 400 Bad Request response
    }

    if (!body.name || !body.owner || !body.content) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
   
    
    // Connect to the database and insert the new object into the tutorials collection. if another tutorial with the same name already exists, return a 409 Conflict response
    const client: MongoClient = await clientPromise;
    const db = client.db('tutorials');

    try {
        const entry = { ...body, lastModified: new Date() };
    
        // Check if an event with the same name and owner already exists
        const existingEvent = await db.collection('tutorials').findOne({ name: body.name});
    
        if (existingEvent) {
            // If an event with the same name and owner exists, return a 409 Conflict response
            return NextResponse.json({ error: 'Tutorial with the same name already exists' }, { status: 409 });
        } else {
            // If no existing event is found, insert the new event
            await db.collection('tutorials').insertOne(entry);
            return NextResponse.json({ message: 'Tutorial added successfully' }, { status: 201 });
        }
    } catch (error) {
        // Handle potential errors during database operations
        console.error('Database insertion error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}
