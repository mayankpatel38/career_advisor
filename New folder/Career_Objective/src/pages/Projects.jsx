import { useState, useMemo } from "react";
import { projectIdeas, careers } from "../data/mockData";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    const result = {};
    for (const level of Object.keys(projectIdeas)) {
      result[level] = filter === "All"
        ? projectIdeas[level]
        : projectIdeas[level].filter((p) => p.career === filter);
    }
    return result;
  }, [filter]);

  return (
    <div className="container">
      <h1 className="page-title">Project Suggestions</h1>
      <p className="page-subtitle">Build a portfolio that stands out. Filter by your target career.</p>

      <div className="filter-bar">
        <label>Filter by career:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          {careers.map((c) => <option key={c.id}>{c.title}</option>)}
        </select>
      </div>

      {Object.entries(filtered).map(([level, items]) => (
        <div key={level} className="level-section">
          <h2>{level} Projects</h2>
          {items.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>No projects match this filter.</p>
          ) : (
            <div className="card-grid">
              {items.map((p) => (
                <div key={p.title} className="project-card">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <span className="tag">{p.career}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
