import mongoose from "mongoose";

const recyclableSchema = new mongoose.Schema(
  {
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    isRecyclable: {
      type: Boolean,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    isOfficial: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Recyclable = mongoose.model("Recyclable", recyclableSchema);

export default Recyclable;
