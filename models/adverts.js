import { toJSON } from "@reis/mongoose-to-json";
import { Schema, model, Types } from "mongoose";

// creating a table for the products, to be stored in advertModel

const advertSchema = new Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Vehicles",
        "Mobiles",
        "Electronics",
        "Furniture",
        "Real estate",
        "Fashion",
      ],
      required: true,
    },
    condition: { type: String, enum: ["used", "brand new"], required: true },
    brandName: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    vendor: { type: Types.ObjectId, ref: "Vendor" },
    description: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

advertSchema.plugin(toJSON);

export const AdvertModel = model("Adverts", advertSchema);
