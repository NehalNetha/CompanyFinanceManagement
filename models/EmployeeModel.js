import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema (
    {
        firstname: String,
        lastname: String,
        addressLineOne: String,
        addressLineTwo: String,
        city : String,
        state : String,
        zip : String,
        socialSecurity: String,
        numberOfWithholdings: Number,
        salary: Number

    }
)

const Employees = mongoose.models.Employees || mongoose.model("Employees", employeeSchema)
export default Employees