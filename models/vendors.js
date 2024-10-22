import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const vendorSchema = new Schema (
    {
        firstName: {type: String, required: true},
        middleName: {type: String, required: false},
        lastName: {type: String, required: true},
        email: {type: String, required: true , unique: true},
        password: {type: String, required: true},
        avatar: {type: String},
        role: {
            type: String,
            default: "vendor",
            enum: ["vendor"]
        }
        
    },
    {
        timestamps: true,
    }
);

vendorSchema.plugin(toJSON);

export const VendorModel = model("Vendor", vendorSchema);