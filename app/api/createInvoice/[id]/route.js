import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

import Invoice from "@/models/InvoiceModel";
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const invoices = await Invoice.findOne({ _id: id });
  return NextResponse.json({ invoices }, { status: 200 });
}


