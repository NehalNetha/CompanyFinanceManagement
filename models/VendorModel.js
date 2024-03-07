import mongoose, {Schema} from "mongoose"

const vendorSchema = new Schema (
    {
        company: String,
        equipment: String,
        price: String,
        addressLine: String,
        city : String,
        state : String,
        zip : String,
    }
)

const Vendor = mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema)
export default Vendor