const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, required: true },
    level: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const details = mongoose.model("detail", detailsSchema);
module.exports = details;
