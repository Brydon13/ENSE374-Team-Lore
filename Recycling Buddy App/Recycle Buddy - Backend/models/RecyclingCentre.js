import mongoose from "mongoose";

const recyclingCentreSchema = new mongoose.Schema(
  {
    rid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recyclable",
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RecyclingCentre = mongoose.model(
  "RecyclingCentre",
  recyclingCentreSchema
);

export default RecyclingCentre;
