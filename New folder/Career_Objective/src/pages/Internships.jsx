import { internships } from "../data/mockData";

export default function Internships() {
  return (
    <div className="container">
      <h1 className="page-title">Internship Opportunities</h1>
      <p className="page-subtitle">Hand-picked internships to kickstart your career.</p>

      <div className="card-grid">
        {internships.map((it) => (
          <div key={it.company + it.role} className="intern-card">
            <h3>{it.role}</h3>
            <div className="intern-meta"><strong>{it.company}</strong> · {it.location}</div>
            <div className="intern-meta">Duration: {it.duration}</div>
            <div className="intern-meta">Stipend: {it.stipend}</div>
            <button className="btn btn-primary">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
