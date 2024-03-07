import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Vendor from "@/models/VendorModel";


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Vendor.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}