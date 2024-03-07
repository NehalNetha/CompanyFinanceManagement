import connectMongoDB from "@/libs/mongodb";
import Invoice from "@/models/InvoiceModel";
import { NextResponse } from "next/server";




export async function GET() {
    try {
        await connectMongoDB();
        const invoices = await Invoice.find();
        const totalOrders = invoices.reduce((acc, invoice) => {
            // Check if the expense has a valid cost_per_month property
            const cost = invoice.total || 0;
            return acc + cost;
        }, 0);

        return NextResponse.json({ totalOrders });
    } catch (error) {
        console.error("Error fetching expenses:", error);
        return NextResponse.json({ error: "Error fetching expenses" }, 500);
    }
}
