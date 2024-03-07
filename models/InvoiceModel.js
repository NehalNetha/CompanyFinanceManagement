import mongoose, {Schema} from "mongoose"

const invoiceSchema = new Schema (
    {
        customer: String,
        quantity: Number,
        price_per_unit: Number,
        total: Number,
        dateAdded: {
            type: Date,
            default: Date.now
        },

    }
)

const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema)
export default Invoice