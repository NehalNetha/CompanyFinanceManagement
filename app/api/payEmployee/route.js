import connectMongoDB from "@/libs/mongodb";
import Payroll from "@/models/PayrollModel";
import { NextResponse } from "next/server";

export async function POST(request){
    const {firstname, lastname, disbursment, withholding} = await request.json()
    await connectMongoDB()
    await Payroll.create({firstname, lastname, disbursment, withholding})
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  
}
  

export async function GET(){
  await connectMongoDB();
  const payrolls = await Payroll.find();
  return NextResponse.json({ payrolls });
}
  
