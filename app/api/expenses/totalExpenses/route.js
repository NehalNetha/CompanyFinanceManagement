import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Expenses from "@/models/ExpensesModel";

export async function GET() {
    try {
        await connectMongoDB();
        const expenses = await Expenses.find();
        const totalExpenses = expenses.reduce((acc, expense) => {
            // Check if the expense has a valid cost_per_month property
            const cost = expense.cost_per_month || 0;
            return acc + cost;
        }, 0);

        return NextResponse.json({ totalExpenses });
    } catch (error) {
        console.error("Error fetching expenses:", error);
        return NextResponse.json({ error: "Error fetching expenses" }, 500);
    }
}
