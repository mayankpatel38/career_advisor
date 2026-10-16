import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  answers: { type: Map, of: Number, required: true },
  recommendations: [{ careerId: String, title: String, score: Number }]
}, { timestamps: true });

export default mongoose.model("Assessment", assessmentSchema);