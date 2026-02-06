import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    console.log('***Middleware executed' , request);
    return NextResponse.next();
}

export const config = {
    matcher: ['/favicon.ico'],
}