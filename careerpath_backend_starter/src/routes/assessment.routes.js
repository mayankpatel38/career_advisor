import { Router } from "express";
import Assessment from "../models/Assessment.js";

const router = Router();
const titles = ["Software Engineer", "Data Scientist", "UI/UX Designer", "Cybersecurity Analyst"];

router.post("/", async (req, res) => {
  try {
    const answers = req.body.answers;
    if (!answers || typeof answers !== "object" || Array.isArray(answers)) return res.status(400).json({ message: "Submit assessment answers." });
    const values = Object.values(answers);
    if (!values.length || values.some(v => !Number.isInteger(v) || v < 0 || v > 3)) return res.status(400).json({ message: "Assessment answers are invalid." });
    const counts = [0, 0, 0, 0];
    values.forEach(v => counts[v]++);
    const total = values.length;
    const recommendations = titles.map((title, i) => ({ careerId: ["software-engineer", "data-scientist", "ui-ux-designer", "cybersecurity-analyst"][i], title, score: Math.round((counts[i] / total) * 100) })).sort((a,b) => b.score-a.score);
    const result = await Assessment.create({ user: req.userId, answers, recommendations });
    res.status(201).json({ assessmentId: result._id, recommendations });
  } catch (err) { console.error(err); res.status(500).json({ message: "Could not save assessment." }); }
});

router.get("/latest", async (req, res) => {
  const result = await Assessment.findOne({ user: req.userId }).sort({ createdAt: -1 });
  if (!result) return res.status(404).json({ message: "No assessment found yet." });
  res.json({ assessment: result });
});
export default router;