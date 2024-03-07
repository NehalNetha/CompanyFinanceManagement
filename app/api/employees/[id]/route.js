import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

import Employees from "@/models/EmployeeModel";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Employees.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}