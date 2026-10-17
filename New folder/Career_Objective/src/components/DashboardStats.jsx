export default function DashboardStats({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((s) => (
        <div key={s.label} className="stat-card">
          <div className="stat-label">{s.label}</div>
          <div className="stat-value">{s.value}</div>
          {s.hint && <div className="stat-hint">{s.hint}</div>}
        </div>
      ))}
    </div>
  );
}
