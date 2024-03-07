import mongoose, { Schema } from "mongoose";

const inventorySchema = new Schema({
  part: String,
  price_per_unit: Number,
  quantity: Number,
  total: Number,
});

inventorySchema.pre('save', function (next) {
  this.total = this.quantity * this.price_per_unit;
  next();
});

const Inventory = mongoose.models.Inventory || mongoose.model("Inventory", inventorySchema);
export default Inventory;