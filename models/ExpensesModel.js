import mongoose, { Schema } from "mongoose";


const expensesSchema = new Schema({
    expense: {
        type: String,
    },
    cost_per_month: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const Expenses = mongoose.models.Expenses || mongoose.model("Expenses", expensesSchema)
export default Expenses