import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '@/pages/api/lib/db';

//return a list of all available tutorials
export async function GET(request: NextRequest) {

    // Connect to the database and fetch the rating
    const client: MongoClient = await clientPromise;
    const db = client.db('tutorials');

    try {
        const tutorials = await db.collection('tutorials').find().toArray();
        return NextResponse.json({ tutorials }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Could not fetch tutorials from database' }, { status: 500 });
    }
}

