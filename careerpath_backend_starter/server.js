import dns from "node:dns";

dns.setServers(["1.1.1.1"]);


import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth.routes.js";
import profileRoutes from "./src/routes/profile.routes.js";
import assessmentRoutes from "./src/routes/assessment.routes.js";
import careerRoutes from "./src/routes/career.routes.js";
import { requireAuth } from "./src/middleware/auth.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "CareerPath Advisor API" }));
app.use("/api/auth", authRoutes);
app.use("/api/profile", requireAuth, profileRoutes);
app.use("/api/assessments", requireAuth, assessmentRoutes);
app.use("/api/careers", careerRoutes);

const port = process.env.PORT || 5000;
if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) {
    console.error("Missing MONGODB_URI or JWT_SECRET. Copy .env.example to .env and configure it.");
    process.exit(1);
}
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => console.log(`CareerPath API running at http://localhost:${port}`));
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    });