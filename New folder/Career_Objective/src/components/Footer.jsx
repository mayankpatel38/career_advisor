export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Student Career Navigator</h4>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
            Helping students discover, plan, and pursue meaningful careers
            with personalized recommendations and roadmaps.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="/recommendations">Careers</a>
          <a href="/assessment">Assessment</a>
          <a href="/projects">Projects</a>
          <a href="/internships">Internships</a>
        </div>
        <div>
          <h4>Account</h4>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Student Career Navigator · College Major Project
      </div>
    </footer>
  );
}
