import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // try {
    const body = await req.formData();
    const albumLink = body.get('albumLink')

    if(!albumLink) {
      throw new Error('No album provided');
    }

    await prisma.album.create({
      data: {
        link: albumLink as string,
      }
    })
  
    return NextResponse.json({ message: "Thank you! We'll add your album shortly.", success: true, data: { albumLink } })

  // } catch(error) {
  //   return NextResponse.json({ message: 'Please provide the album link', success: false }, { status: 400 })
  // }
}
