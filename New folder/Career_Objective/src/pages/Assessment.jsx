
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { assessmentQuestions } from "../data/mockData";
import AssessmentQuestion from "../components/AssessmentQuestion";
import { apiRequest } from "../lib/api";

export default function Assessment() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const q = assessmentQuestions[current];
  const total = assessmentQuestions.length;
  const progress = ((current + 1) / total) * 100;

  const select = (idx) => {
    setAnswers((previous) => ({ ...previous, [q.id]: idx }));
    setError("");
  };

  const next = () => {
    if (current < total - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const submit = async () => {
    setError("");

    const token = localStorage.getItem("careerpath_token");

    if (!token) {
      setError("Please log in before submitting your assessment.");
      return;
    }

    if (Object.keys(answers).length !== total) {
      setError("Please answer every question before submitting.");
      return;
    }

    if (
      Object.values(answers).some(
        (value) =>
          !Number.isInteger(value) || value < 0 || value > 3
      )
    ) {
      setError("One or more answers are invalid. Please check your answers.");
      return;
    }

    setSubmitting(true);

    try {
      const result = await apiRequest("/api/assessments", {
        method: "POST",
        token,
        body: { answers },
      });

      navigate({
        to: "/recommendations",
        state: { recommendations: result.recommendations },
      });
    } catch (err) {
      setError(err.message || "Could not submit your assessment.");
    } finally {
      setSubmitting(false);
    }
  };

  const isLast = current === total - 1;
  const selected = answers[q.id];

  return (
    <div className="container">
      <h1 className="page-title text-center">Career Assessment</h1>
      <p className="page-subtitle text-center">
        Answer honestly — we'll match you to careers that fit.
      </p>

      <div className="assessment-card">
        <div className="progress-text">
          Question {current + 1} of {total}
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <AssessmentQuestion
          question={q}
          selected={selected}
          onSelect={select}
        />

        {error && (
          <p role="alert" style={{ color: "red" }}>
            {error}
          </p>
        )}

        <div className="assessment-nav">
          <button
            type="button"
            className="btn btn-outline"
            onClick={prev}
            disabled={current === 0 || submitting}
          >
            ← Previous
          </button>

          {isLast ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={submit}
              disabled={selected === undefined || submitting}
            >
              {submitting ? "Submitting..." : "Submit Assessment"}
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={next}
              disabled={selected === undefined || submitting}
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
