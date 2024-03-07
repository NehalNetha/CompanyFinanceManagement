import connectMongoDB from "@/libs/mongodb";
import Inventory from "@/models/InventoryModel";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        await connectMongoDB()
        const inventory = await Inventory.find()
        const totalInventory = inventory.reduce((acc, inv) => 
            {
                const cost = inv.total || 0;
                return acc + cost;
            }, 0
        )
        return NextResponse.json({totalInventory})
    }catch(error){
        console.error("Error fetching inventory:", error);
        return NextResponse.json({ error: "Error fetching inventory" }, 500);
    }
}