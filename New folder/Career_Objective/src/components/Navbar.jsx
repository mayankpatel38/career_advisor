
import { useState, useEffect } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/profile", label: "Profile" },
  { to: "/assessment", label: "Assessment" },
  { to: "/recommendations", label: "Careers" },
  { to: "/skill-gap", label: "Skill Gap" },
  { to: "/projects", label: "Projects" },
  { to: "/internships", label: "Internships" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  setIsLoggedIn(
    !!localStorage.getItem("careerpath_token")
  );
}, []);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const navigate = useNavigate();

  // Recheck authentication when navigating between pages.
  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("careerpath_token")));
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("careerpath_token");
    localStorage.removeItem("careerpath_user");

    setIsLoggedIn(false);
    setOpen(false);

    navigate({ to: "/login" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setOpen(false)}
        >
          🎓 Career Objective
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>

        <div className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={pathname === link.to ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              type="button"
              className="btn btn-outline"
              style={{ marginLeft: "0.5rem" }}
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => setOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
