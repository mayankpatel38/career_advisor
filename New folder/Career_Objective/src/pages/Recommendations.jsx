
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { apiRequest } from "../lib/api";
import CareerCard from "../components/CareerCard";

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadRecommendations() {
      try {
        const token = localStorage.getItem("careerpath_token");

        if (!token) {
          throw new Error("Please log in to view your recommendations.");
        }

        const data = await apiRequest("/api/assessments/latest", { token });
        const results = data.assessment?.recommendations;

        if (!Array.isArray(results)) {
          throw new Error("No recommendations found. Please take the assessment.");
        }

        const sorted = [...results].sort((a, b) => b.score - a.score);

        if (active) setRecommendations(sorted);
      } catch (err) {
        if (active) setError(err.message || "Could not load recommendations.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadRecommendations();
    return () => {
      active = false;
    };
  }, []);

  const topCareer = recommendations[0];

  return (
    <div className="container">
      <h1 className="page-title">Recommended Careers</h1>
      <p className="page-subtitle">
        Explore career paths based on your latest assessment.
      </p>

      {loading && <p>Loading your career matches...</p>}

      {!loading && error && (
        <div className="section-card">
          <p role="alert">{error}</p>
          <Link to="/assessment" className="btn btn-primary">
            Take Assessment
          </Link>
        </div>
      )}

      {!loading && !error && (
        <>
          {topCareer && (
            <div className="section-card">
              <h3>Your Top Career Match</h3>
              <p>
                Based on your latest assessment, your highest-scoring career is{" "}
                <strong>{topCareer.title}</strong> with a {topCareer.score}% match.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Explore its required skills, learning roadmap, and career
                opportunities to decide whether it fits your goals.
              </p>
            </div>
          )}

          <h2 style={{ marginTop: "1.5rem" }}>Your Career Matches</h2>
          <p className="page-subtitle">
            Compare your results and explore the career paths below.
          </p>

          <div className="card-grid">
            {recommendations.map((career) => (
              <CareerCard
                key={career.careerId}
                career={{
                  id: career.careerId,
                  careerId: career.careerId,
                  title: career.title,
                  match: career.score,
                  score: career.score,
                }}
              />
            ))}
          </div>

          <div className="section-card" style={{ marginTop: "1.5rem" }}>
            <h3>How to Understand Your Match Score</h3>
            <p style={{ color: "var(--muted)" }}>
              Your match percentage represents the score calculated by the
              current assessment system. Use it as an initial guide, not as a
              guarantee that a career is right for you.
            </p>
            <ul style={{ color: "var(--muted)", paddingLeft: "1.25rem" }}>
              <li>Explore the careers with the highest scores first.</li>
              <li>Review the required skills for each career.</li>
              <li>Follow the learning roadmap to build relevant skills.</li>
              <li>Consider your interests, strengths, and long-term goals.</li>
            </ul>
          </div>

          <div className="section-card">
            <h3>What Should You Do Next?</h3>
            <p style={{ color: "var(--muted)" }}>
              Choose a career to explore, identify the skills you need to
              develop, and work on projects that demonstrate your abilities.
              You can retake the assessment as your interests change.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginTop: "1rem",
              }}
            >
              <Link to="/assessment" className="btn btn-primary">
                Retake Assessment
              </Link>
              <Link to="/skill-gap" className="btn btn-outline">
                Analyze Skill Gap
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
