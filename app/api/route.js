import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/app-beta'

export async function GET() {
  const user = await currentUser()

  if (!user) {
    return NextResponse.json({ message: 'No esta Logeado aun.' })
  }

  return NextResponse.json({ name: user.firstName })
}
