import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

export async function POST(request: NextRequest, response: NextResponse) {
    const cookieName = 'session';
    if (!request.cookies.has(cookieName)) {
        return NextResponse.json({ error: 'Could not find session cookie in request' }, { status: 401 })
    }
    const sessionCookie = request.cookies.get(cookieName)?.value;

    // Check if the request body is a valid JSON object with the required fields
    const bodyText = await request.text();
    const activity = JSON.parse(bodyText);

    /* 
    * Required fields:
    * timeStamp: The timestamp when the activity occurred
    * timeZoneOffset: The timezone offset in minutes
    * url: The URL of the page where the activity occurred
    * activeDuration: The duration of the activity in seconds
    * */
    if (!activity.timeStamp || !activity.timeZoneOffset || !activity.url || !activity.activeDuration || !activity.trigger) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); // Return a 400 Bad Request response
    }
    else {
        // add the session cookie to the activity object
        activity.uuid = sessionCookie;
        // Log the activity to a file
        fs.appendFileSync('./logbook/user_activity.json', JSON.stringify(activity) + ',\n');
        return NextResponse.json({ message: 'Activity logged successfully' });
    }

};
