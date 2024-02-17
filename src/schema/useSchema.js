const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
  },
  { versionKey: false, timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
