const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      required: true,
      default: [],
    },
    priority: {
      type: String,
      required: true,
      default: "High",
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
    postUserId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const taskModel = mongoose.model("Tasks", userSchema);

module.exports = { taskModel };
