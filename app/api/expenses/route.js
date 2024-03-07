import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Expenses from "@/models/ExpensesModel";

export async function POST(request){
    const {expense, cost_per_month} = await request.json()
    await connectMongoDB()
    await Expenses.create({expense, cost_per_month})
    return NextResponse.json({ message: "expense Created" }, { status: 201 });

}


export async function GET(){
    await connectMongoDB();
    const expenses = await Expenses.find();
    return NextResponse.json({ expenses });
  }