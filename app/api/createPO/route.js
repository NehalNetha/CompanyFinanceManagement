import connectMongoDB from "@/libs/mongodb";

import { NextResponse } from "next/server";
import PO from "@/models/PoModel";

export async function POST(request){
    const {vendor, part, quantity, price_per_part, total} = await request.json()
    await connectMongoDB()
    await PO.create({vendor, part, quantity, price_per_part, total})
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  
  }
  

export async function GET(){
  await connectMongoDB();
  const po = await PO.find();
  return NextResponse.json({ po });
}
  