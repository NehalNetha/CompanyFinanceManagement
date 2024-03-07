import connectMongoDB from "@/libs/mongodb";
import Employees from "@/models/EmployeeModel";
import { NextResponse } from "next/server";

export async function POST(request){
    const {firstname, lastname, addressLineOne, addressLineTwo, city, state, zip, socialSecurity, numberOfWithholdings, salary} = await request.json()
    await connectMongoDB()
    await Employees.create({firstname, lastname, addressLineOne, addressLineTwo, city, state, zip, socialSecurity, numberOfWithholdings, salary})
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });

}

export async function GET(){
  await connectMongoDB();
  const employees = await Employees.find();
  return NextResponse.json({ employees });
}