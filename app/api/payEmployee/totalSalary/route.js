import connectMongoDB from "@/libs/mongodb";
import Payroll from "@/models/PayrollModel";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongoDB();
    const payrolls = await Payroll.find();
    const totalDisbursment = payrolls.reduce((acc, payroll) => acc + payroll.disbursment, 0);
    return NextResponse.json({ totalDisbursment });
}
