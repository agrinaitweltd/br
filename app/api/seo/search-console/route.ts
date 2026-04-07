import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ error: "Service not available" }, { status: 503 })
}

  return new NextResponse(verificationContent, {
    headers: {
      "Content-Type": "text/html",
    },
  })
}
