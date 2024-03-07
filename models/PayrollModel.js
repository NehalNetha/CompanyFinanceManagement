import mongoose, {Schema} from "mongoose"

const payrollSchema = new Schema (
    {
        firstname: String,
        lastname: String,
        disbursment: Number,
        withholding: Number,
        dateAdded: {
            type: Date,
            default: Date.now
        },

    }
)

const Payroll = mongoose.models.Payroll || mongoose.model("Payroll", payrollSchema)
export default Payroll