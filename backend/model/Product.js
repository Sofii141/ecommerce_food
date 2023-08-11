import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    },
  },
  {
    timestamps: false,
  }
);

export default model("Product", productSchema);
