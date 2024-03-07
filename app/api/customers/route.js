import connectMongoDB from "@/libs/mongodb";
import Customer from "@/models/CustomerModel";
import { NextResponse } from "next/server";

export async function POST(request){
    const {company, firstname, lastname, addressLineOne, addressLineTwo, city, state, zip, price} = await request.json()
    await connectMongoDB()
    await Customer.create({company, firstname, lastname, addressLineOne, addressLineTwo, city, state, zip, price})
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });

}

export async function GET(){
  await connectMongoDB();
  const customers = await Customer.find();
  return NextResponse.json({ customers });
}