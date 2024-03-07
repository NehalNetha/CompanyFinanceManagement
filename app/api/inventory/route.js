import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Inventory from "@/models/InventoryModel";


export async function POST(request) {
  const { part, price_per_unit, quantity } = await request.json();

  await connectMongoDB();

  const total = price_per_unit * quantity;

  const newInventory = await Inventory.create({ part, price_per_unit, quantity, total });

  return NextResponse.json({ message: "Inventory Created", data: newInventory }, { status: 201 });
}

export async function GET(){
  await connectMongoDB();
  const inventory = await Inventory.find();
  return NextResponse.json({ inventory });
}
  

export async function PUT(request) {
  const { part, quantity } = await request.json();

  await connectMongoDB();

  // Find the inventory item based on the part
  const existingInventory = await Inventory.findOne({ part });

  if (!existingInventory) {
    return NextResponse.json({ message: "Inventory not found for the specified part" }, { status: 404 });
  }

  // Update the quantity
  existingInventory.quantity += quantity;
  existingInventory.total = existingInventory.price_per_unit * existingInventory.quantity ;

  // Save the updated inventory
  await existingInventory.save();

  return NextResponse.json({ message: "Inventory updated", data: existingInventory });
} 