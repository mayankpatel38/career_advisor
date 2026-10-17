export default function AssessmentQuestion({ question, selected, onSelect }) {
  return (
    <div>
      <h2 className="assessment-q">{question.question}</h2>
      <div className="assessment-options">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={`assessment-option ${selected === i ? "selected" : ""}`}
            onClick={() => onSelect(i)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
