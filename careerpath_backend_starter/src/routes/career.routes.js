import { Router } from "express";
const router = Router();

const careers = [
  { id: "software-engineer", title: "Software Engineer", description: "Build and maintain applications and software systems.", requiredSkills: ["Programming", "Data Structures", "Git", "Databases", "Testing"], roadmap: ["Programming fundamentals", "Data structures and algorithms", "Build portfolio projects", "Learn APIs and databases", "Practice interviews"] },
  { id: "data-scientist", title: "Data Scientist", description: "Use statistics and data to answer business questions.", requiredSkills: ["Python", "SQL", "Statistics", "Data Visualization", "Machine Learning"], roadmap: ["Python fundamentals", "Statistics and probability", "SQL and data cleaning", "Machine learning basics", "Build data projects"] },
  { id: "ui-ux-designer", title: "UI/UX Designer", description: "Design usable and accessible digital experiences.", requiredSkills: ["Figma", "Wireframing", "Prototyping", "User Research", "Visual Design"], roadmap: ["Design fundamentals", "Learn Figma", "Practice wireframes", "Conduct usability testing", "Build a case-study portfolio"] },
  { id: "cybersecurity-analyst", title: "Cybersecurity Analyst", description: "Help protect systems, networks, and data.", requiredSkills: ["Networking", "Linux", "Security Fundamentals", "Log Analysis", "Scripting"], roadmap: ["Networking fundamentals", "Linux and command line", "Security principles", "Practice in legal labs", "Prepare for entry-level roles"] }
];

router.get("/", (_req, res) => res.json({ careers }));
router.get("/:id", (req, res) => {
  const career = careers.find(item => item.id === req.params.id);
  if (!career) return res.status(404).json({ message: "Career not found." });
  res.json({ career });
});
export default router;