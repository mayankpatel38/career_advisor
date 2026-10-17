
import { Link } from "@tanstack/react-router";
import { careers } from "../data/mockData";

export default function CareerCard({ career }) {
  const careerId = career.id || career.careerId;

  const details = careers.find(
    (item) =>
      item.id === careerId ||
      item.careerId === careerId
  );

  return (
    <div className="career-card">
      <span className="match-badge">
        {career.match ?? career.score ?? 0}% Match
      </span>

      <h3>{career.title}</h3>

      <p>
        {details?.description ||
          "Explore this career, its required skills, and learning opportunities."}
      </p>

      {details?.salary && (
        <p>
          <strong>Typical salary range:</strong> {details.salary}
        </p>
      )}

      {details?.requiredSkills?.length > 0 && (
        <div className="tag-list">
          {details.requiredSkills.slice(0, 3).map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      )}

      <Link
        to="/career/$id"
        params={{ id: String(careerId || "") }}
        className="btn btn-primary"
      >
        View Details
      </Link>
    </div>
  );
}
