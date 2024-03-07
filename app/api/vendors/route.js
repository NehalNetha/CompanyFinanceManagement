import connectMongoDB from "@/libs/mongodb";
import Vendor from "@/models/VendorModel";
import { NextResponse } from "next/server";

export async function POST(request){
    const {company, equipment, price, addressLine, city, state, zip} = await request.json()
    await connectMongoDB()
    await Vendor.create({company, equipment, price,  addressLine, city, state, zip})
    return NextResponse.json({ message: "vendor Created" }, { status: 201 });

}

export async function GET(){
  await connectMongoDB();
  const vendors = await Vendor.find();
  return NextResponse.json({ vendors });
}