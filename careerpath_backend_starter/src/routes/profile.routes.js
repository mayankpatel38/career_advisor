
import { Router } from "express";
import User from "../models/User.js";

const router = Router();

// Get the logged-in user's profile
router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found."
      });
    }

    res.json({
      profile: {
        name: user.name,
        email: user.email,
        ...(user.profile?.toObject?.() || {})
      }
    });
  } catch (err) {
    console.error("Profile load error:", err);
    res.status(500).json({
      message: "Could not load profile."
    });
  }
});

// Save the logged-in user's profile
router.put("/", async (req, res) => {
  try {
    const allowed = [
      "age",
      "location",
      "phone",
      "institution",
      "degree",
      "year",
      "cgpa",
      "skills",
      "interests",
      "careerGoal"
    ];

    const updates = {};

    for (const key of allowed) {
      if (req.body[key] !== undefined) {
        updates[`profile.${key}`] = req.body[key];
      }
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found."
      });
    }

    res.json({
      message: "Profile saved.",
      profile: {
        name: user.name,
        email: user.email,
        ...(user.profile?.toObject?.() || {})
      }
    });
  } catch (err) {
    console.error("Profile save error:", err);

    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Please check the profile values."
      });
    }

    res.status(500).json({
      message: "Could not save profile."
    });
  }
});

export default router;
