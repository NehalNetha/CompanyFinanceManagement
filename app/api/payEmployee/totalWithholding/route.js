import connectMongoDB from "@/libs/mongodb";
import Payroll from "@/models/PayrollModel";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongoDB();
    const payrolls = await Payroll.find();
    const totalWitholding = payrolls.reduce((acc, payroll) => acc + payroll.withholding, 0);
    return NextResponse.json({ totalWitholding });
}
