import mongoose, {Schema} from "mongoose"

const poSchema = new Schema (
    {
        vendor: String,
        part: String,
        quantity: Number,
        price_per_part: Number,
        total: Number,
        dateAdded: {
            type: Date,
            default: Date.now
        },

    }
)

const PO = mongoose.models.PO || mongoose.model("PO", poSchema)
export default PO