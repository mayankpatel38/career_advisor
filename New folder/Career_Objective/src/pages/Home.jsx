import { Link } from "@tanstack/react-router";
import { features } from "../data/mockData";
import { useState, useEffect } from "react";

function TypingText({ text, typeSpeed = 90, eraseSpeed = 50, pause = 1800 }) {
  const [count, setCount] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    let delay = erasing ? eraseSpeed : typeSpeed;
    if (!erasing && count === text.length) delay = pause;
    if (erasing && count === 0) delay = 600;

    const timer = setTimeout(() => {
      if (!erasing && count === text.length) setErasing(true);
      else if (erasing && count === 0) setErasing(false);
      else setCount((c) => c + (erasing ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [count, erasing, text, typeSpeed, eraseSpeed, pause]);

  return (
    <>
      {text.slice(0, count)}
      <span className="typing-cursor" />
    </>
  );
}
export default function Home() {
  return (
    <>
       <section className="hero">
  <h1 className="hero-title-animate">
    Student Career Navigator
  </h1>

  <p className="hero-description-animate">
    Discover careers that fit you. Get personalized assessments, learning
    roadmaps, project ideas, and internship opportunities — all in one place.
  </p>
        <Link to="/register" className="btn btn-primary btn-large">
          Get Started →
        </Link>
      </section>

      <section className="features">
        <h2>Everything you need to plan your career</h2>
        <p className="features-sub">
  <TypingText text="Built for students, by students." />
</p>
        <div className="features-grid">
          {features.map((f, index) => (
  <div
    key={f.title}
    className="feature-card"
    style={{ "--motion-order": index }}
  >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
