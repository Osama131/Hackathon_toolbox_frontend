import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import clientPromise, { getMongooseConnection } from '@/pages/api/lib/db';
import { getEventModel } from '@/models/event/schema';

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
    return NextResponse.json(
      { error: 'Could not fetch events from database' },
      { status: 500 },
    );
  }
}

// POST add a new event
export async function POST(request: NextRequest) {
  // verify that the request body is a valid JSON object with the required fields
  let body;
  try {
    body = await request.formData();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid FormData' }, { status: 400 }); // Return a 400 Bad Request response
  }
  let formEntries = {};
  for (let [key, value] of body.entries()) {
    formEntries[key] = value;
  }
  formEntries.created = new Date();
  const client: MongoClient = await clientPromise;
  const mongooseConnection = await getMongooseConnection(client);
  const EventModel = getEventModel(mongooseConnection);
  let event;
  try {
    event = new EventModel(formEntries);
    await event.validate();
    console.info('event validated');
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      console.error('Event validation error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error(`unknown error while validating event ${event}\n`, error);
    return NextResponse.json({ error: 'unknown error while validating event' }, { status: 500 });
  }

  try {
    await event.save();
    return NextResponse.json({ message: 'Event created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Database insert error:', error);
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
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 },
    ); // Return a 400 Bad Request response
  }

  // Connect to the database and update the event
  const client: MongoClient = await clientPromise;
  const db = client.db('events');

  try {
    const entry = { ...body, lastModified: new Date() };

    // Check if an event with the same name and owner already exists
    const existingEvent = await db
      .collection('events')
      .findOne({ name: body.name });

    if (existingEvent) {
      // If an event with the same name and owner exists, return a 409 Conflict response
      return NextResponse.json(
        { error: 'Event with the same name and owner already exists' },
        { status: 409 },
      );
    } else {
      // If no existing event is found, update the event
      await db.collection('events').updateOne({ _id: id }, { $set: entry });
      return NextResponse.json(
        { message: 'Event updated successfully' },
        { status: 200 },
      );
    }
  } catch (error) {
    // Handle potential errors during database operations
    console.error('Database update error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
