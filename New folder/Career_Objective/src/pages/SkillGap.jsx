import SkillCard from "../components/SkillCard";
import RoadmapCard from "../components/RoadmapCard";

const currentSkills = [
  { name: "JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "HTML/CSS", level: 90 },
  { name: "Git", level: 65 },
];

const missingSkills = ["Node.js", "System Design", "Data Structures", "SQL"];

const path = [
  { title: "Strengthen DSA", desc: "Solve 100 problems on LeetCode over 8 weeks." },
  { title: "Learn Node.js", desc: "Build 2 backend projects with Express + MongoDB." },
  { title: "Master SQL", desc: "Complete SQLBolt and practice on HackerRank." },
  { title: "System Design Basics", desc: "Study scalability, caching, and load balancing." },
];

export default function SkillGap() {
  const overall = Math.round(currentSkills.reduce((s, x) => s + x.level, 0) / currentSkills.length);

  return (
    <div className="container">
      <h1 className="page-title">Skill Gap Analysis</h1>
      <p className="page-subtitle">Compare your current skills with what your target career demands.</p>

      <div className="section-card">
        <div className="flex-between">
          <h3 style={{ margin: 0 }}>Overall Readiness</h3>
          <strong style={{ color: "var(--primary-dark)", fontSize: "1.5rem" }}>{overall}%</strong>
        </div>
        <div className="progress-bar mt-2"><div className="progress-fill" style={{ width: `${overall}%` }} /></div>
      </div>

      <div className="detail-grid">
        <div>
          <div className="section-card">
            <h3>Current Skills</h3>
            {currentSkills.map((s) => <SkillCard key={s.name} {...s} variant="current" />)}
          </div>
        </div>
        <div>
          <div className="section-card">
            <h3>Missing Skills</h3>
            {missingSkills.map((s) => <SkillCard key={s} name={s} variant="missing" />)}
          </div>
        </div>
      </div>

      <div className="section-card">
        <h3>Suggested Learning Path</h3>
        <div className="roadmap-list">
          {path.map((step, i) => <RoadmapCard key={i} step={step} index={i} />)}
        </div>
      </div>
    </div>
  );
}
