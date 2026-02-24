import mongoose from "mongoose";
const studSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  reg_no: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  ph_no: {
    required: true,
    type: Number,
  },
  location: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

export const studModel = mongoose.model("studentDetails", studSchema);
