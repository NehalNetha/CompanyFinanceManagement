import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import PO from "@/models/PoModel";



export async function GET() {
  try {
      await connectMongoDB();
      const po = await PO.find();
      const totalPurchases = po.reduce((acc, orders) => {
          // Check if the expense has a valid cost_per_month property
          const cost = orders.total || 0;
          return acc + cost;
      }, 0);

      return NextResponse.json({ totalPurchases });
  } catch (error) {
      console.error("Error fetching expenses:", error);
      return NextResponse.json({ error: "Error fetching expenses" }, 500);
  }
}
