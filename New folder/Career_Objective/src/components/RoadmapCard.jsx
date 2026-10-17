export default function RoadmapCard({ step, index }) {
  return (
    <div className="roadmap-step">
      <div className="roadmap-step-num">{index + 1}</div>
      <div>
        <strong>{step.title}</strong>
        <div style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: "0.2rem" }}>
          {step.desc}
        </div>
      </div>
    </div>
  );
}
