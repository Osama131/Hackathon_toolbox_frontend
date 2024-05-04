import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
    // Generate a JWT token
    const token = jwt.sign({ userId: "123456" }, "secretKey");

    // Return the token to the user
    return NextResponse.json({ token });
}

