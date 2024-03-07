import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Invoice from "@/models/InvoiceModel";

export async function POST(request){
    const {customer, quantity, price_per_unit, total} = await request.json()
    await connectMongoDB()
    await Invoice.create({customer, quantity, price_per_unit, total})
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  
  }
  

export async function GET(){
  await connectMongoDB();
  const invoices = await Invoice.find();
  return NextResponse.json({ invoices });
}
  