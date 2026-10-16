import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  age: { type: Number, min: 13, max: 120 },
  location: { type: String, trim: true, maxlength: 120 },
  phone: { type: String, trim: true, maxlength: 30 },
  institution: { type: String, trim: true, maxlength: 160 },
  degree: { type: String, trim: true, maxlength: 120 },
  year: { type: String, trim: true, maxlength: 50 },
  cgpa: { type: Number, min: 0, max: 10 },
  skills: [{ type: String, trim: true, maxlength: 60 }],
  interests: [{ type: String, trim: true, maxlength: 60 }],
  careerGoal: { type: String, trim: true, maxlength: 1000 }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, maxlength: 254 },
  passwordHash: { type: String, required: true, select: false },
  profile: { type: profileSchema, default: () => ({}) }
}, { timestamps: true });

export default mongoose.model("User", userSchema);