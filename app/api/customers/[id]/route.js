import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

import Customer from "@/models/CustomerModel";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const customer = await Customer.findOne({ _id: id });
  return NextResponse.json({ customer }, { status: 200 });
}