import mongoose, {Schema} from "mongoose"

const customerSchema = new Schema (
    {
        _id: { type: Schema.Types.ObjectId, auto: true },
        company: String,
        firstname: String,
        lastname: String,
        addressLineOne: String,
        addressLineTwo: String,
        city : String,
        state : String,
        zip : String,
        price: Number

    }
)

const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema)
export default Customer