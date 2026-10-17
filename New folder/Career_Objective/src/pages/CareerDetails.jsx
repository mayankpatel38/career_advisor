
import { Link, useParams } from "@tanstack/react-router";
import { careers } from "../data/mockData";
import RoadmapCard from "../components/RoadmapCard";

export default function CareerDetails() {
  const { id } = useParams({ from: "/career/$id" });

  const normalizeId = (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/_/g, "-")
      .trim();

  const career = careers.find(
    (item) =>
      normalizeId(item.id) === normalizeId(id) ||
      normalizeId(item.careerId) === normalizeId(id) ||
      normalizeId(item.title) === normalizeId(id)
  );

  if (!career) {
    return (
      <div className="container empty-state">
        <h2>Career not found</h2>
        <p>
          We could not find details for this career. Please select a career
          from the recommendations page.
        </p>
        <Link
          to="/recommendations"
          className="btn btn-primary mt-2"
        >
          Back to recommendations
        </Link>
      </div>
    );
  }

  const requiredSkills = career.requiredSkills || [];
  const roadmap = career.roadmap || [];
  const resources = career.resources || [];

  return (
    <div className="container">
      <div className="detail-hero">
        <span
          className="match-badge"
          style={{
            background: "#fff",
            color: "var(--primary-dark)",
          }}
        >
          {career.match ?? 0}% Match
        </span>

        <h1>{career.title}</h1>

        <p style={{ opacity: 0.95, maxWidth: 720 }}>
          {career.description || "Explore this career and its learning path."}
        </p>
      </div>

      <div className="detail-grid">
        <div>
          <div className="section-card">
            <h3>Career Overview</h3>
            <p style={{ color: "var(--muted)" }}>
              {career.overview || career.description || "Career overview coming soon."}
            </p>
          </div>

          <div className="section-card">
            <h3>Required Skills</h3>
            <div className="tag-list">
              {requiredSkills.length ? (
                requiredSkills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))
              ) : (
                <p>Skills information coming soon.</p>
              )}
            </div>
          </div>

          <div className="section-card">
            <h3>Learning Roadmap</h3>
            <div className="roadmap-list">
              {roadmap.length ? (
                roadmap.map((step, index) => (
                  <RoadmapCard
                    key={index}
                    step={step}
                    index={index}
                  />
                ))
              ) : (
                <p>Learning roadmap coming soon.</p>
              )}
            </div>
          </div>

          <div className="section-card">
            <h3>Recommended Resources</h3>
            {resources.length ? (
              <ul style={{ paddingLeft: "1.25rem", color: "var(--muted)" }}>
                {resources.map((resource) => (
                  <li key={resource} style={{ margin: "0.4rem 0" }}>
                    {resource}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Recommended resources coming soon.</p>
            )}
          </div>
        </div>

        <div>
          <div className="section-card">
            <h3>Salary Range</h3>
            <div className="salary-box">
              <strong>{career.salary || "Not available"}</strong>
              <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                Average in India
              </div>
            </div>
          </div>

          <div className="section-card">
            <h3>Future Scope</h3>
            <p style={{ color: "var(--muted)" }}>
              {career.futureScope || "Future scope information coming soon."}
            </p>
          </div>

          <Link
            to="/skill-gap"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Analyze My Skill Gap
          </Link>
        </div>
      </div>
    </div>
  );
}
