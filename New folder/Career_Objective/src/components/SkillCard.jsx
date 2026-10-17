export default function SkillCard({ name, level, variant = "current" }) {
  return (
    <div className={`skill-card ${variant}`}>
      <div>
        <strong>{name}</strong>
        {variant === "missing" && (
          <div style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
            Recommended to learn
          </div>
        )}
      </div>
      {variant === "current" && (
        <div className="skill-progress" title={`${level}% proficiency`}>
          <div className="skill-progress-fill" style={{ width: `${level}%` }} />
        </div>
      )}
    </div>
  );
}
