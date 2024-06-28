import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
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
    if (!body.uuid) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 401 }); // Return a 400 Bad Request response
    }
    const entry = { uuid: body.uuid };

    // Connect to the database and insert the comment object into the uuids collection
    const client: MongoClient = await clientPromise;
    const db = client.db('uuids');

    try {
        //check if uuid is already in use
        const uuid = await db.collection('uuids').findOne(entry);
        // generate a new avatarConfig if no document is found
        if (!uuid) {
            const result = await db.collection('uuids').insertOne(entry);
            return NextResponse.json({ message: "Success", ...entry }, { status: 200 });
        }
        return NextResponse.json({ message: "uuid already registered" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error while trying to add or find uuid in database' }, { status: 500 });
    }
}


export async function GET(request: NextRequest) {
    const client: MongoClient = await clientPromise;
    const db = client.db('uuids');
    const collection = db.collection('uuids');
    let unique = false;
    let final_uuid;
    while (!unique) {
        const uuid = uuidv4();
        const existing = await collection.count({ uuid: uuid });
        if (existing === 0) {
            unique = true;
            final_uuid = uuid;
        }
    }
    const result = await collection.insertOne({ uuid: final_uuid });
    if (result.insertedId) {
        return NextResponse.json({ message: "Success", uuid: final_uuid }, { status: 200 });
    } else {
        return NextResponse.json({ error: 'Could not add uuid to database' }, { status: 500 });
    }
}


