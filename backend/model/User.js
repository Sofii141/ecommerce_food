import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    lastname: {
      type: String,
    },

    firstname: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    confirmPassword: {
      type: String,
    },

    image: {
      type: String,
    },
  },{
    timestamps: false, 
  });

export default model("User", userSchema);
