import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import initDb from "@/models/server/db"
import getOrCreateStorage from "@/models/server/storageSetup"

export async function middleware(_: NextRequest) {
    await Promise.all([initDb(), getOrCreateStorage()])

    return NextResponse.next()
}

export const config = {
    /* match all paths except : 

	 - api
	 - _next/static
	 - _next/image
	 _ favicon.com

	*/
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
