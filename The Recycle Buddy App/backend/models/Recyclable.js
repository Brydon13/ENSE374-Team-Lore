const mongoose = require("mongoose");

const recyclableSchema = new mongoose.Schema(
  {
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    info: {
      type: String,
    },
    isRecyclable: {
      type: Boolean,
    },
    manufacturer: {
      type: String,
    },
    isOfficial: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Recyclable = mongoose.model("Recyclable", recyclableSchema);

exports.Recyclable = Recyclable;
