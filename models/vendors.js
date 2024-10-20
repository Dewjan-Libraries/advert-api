import { required } from "joi";
import { Schema, model } from "mongoose";

export const vendorSchema = new Schema (
    {
        name: {type: String, required: true},
        
    }
)