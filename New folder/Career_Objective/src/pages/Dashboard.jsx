import { Link } from "@tanstack/react-router";
import DashboardStats from "../components/DashboardStats";
import { careers } from "../data/mockData";

export default function Dashboard() {
  const stats = [
    { label: "Assessments Taken", value: "1", hint: "Last taken: today" },
    { label: "Saved Careers", value: "3", hint: "View your list below" },
    { label: "Skills Tracked", value: "8", hint: "4 mastered" },
    { label: "Readiness", value: "76%", hint: "Up 12% this month" },
  ];
  const saved = careers.slice(0, 3);
  const actions = [
    { label: "Complete your skill gap analysis", to: "/skill-gap" },
    { label: "Pick a new portfolio project", to: "/projects" },
    { label: "Apply to 2 internships this week", to: "/internships" },
  ];

  return (
    <div className="container">
      <div className="welcome-banner motion-fade-up">
        <h2>Welcome back, Alex! 👋</h2>
        <p>You're 76% ready for your dream role. Keep going!</p>
      </div>

      <DashboardStats stats={stats} />

      <div className="dashboard-grid">
        <div className="section-card">
          <div className="flex-between">
            <h3 style={{ margin: 0 }}>Assessment Summary</h3>
            <Link to="/assessment" className="btn btn-ghost">Retake</Link>
          </div>
          <p style={{ color: "var(--muted)", marginTop: "0.75rem" }}>
            Your top strength is <strong>problem-solving</strong> with a leaning toward
            building things. Strong fit for engineering and data roles.
          </p>
          <Link to="/recommendations" className="btn btn-outline mt-2">View Recommendations</Link>
        </div>

        <div className="section-card">
          <h3>Saved Career Paths</h3>
          {saved.map((c) => (
            <div key={c.id} className="list-item">
              <div>
                <strong>{c.title}</strong>
                <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{c.match}% match</div>
              </div>
              <Link to="/career/$id" params={{ id: c.id }} className="btn btn-ghost">Open</Link>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ gridColumn: "1 / -1" }}>
          <h3>Recommended Actions</h3>
          {actions.map((a) => (
            <div key={a.label} className="list-item">
              <span>✅ {a.label}</span>
              <Link to={a.to} className="btn btn-outline">Go</Link>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ gridColumn: "1 / -1" }}>
          <h3>Progress Overview</h3>
          <div style={{ marginBottom: "0.5rem", color: "var(--muted)" }}>Overall readiness</div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: "76%" }} /></div>
        </div>
      </div>
    </div>
  );
}
