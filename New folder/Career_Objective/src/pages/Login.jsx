
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { apiRequest } from "../lib/api";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/api/auth/login", {
        method: "POST",
        body: {
          email: form.email.trim().toLowerCase(),
          password: form.password,
        },
      });

      if (!data.token) {
        throw new Error(
          "Login response did not contain an authentication token."
        );
      }

      // Save the authentication token.
      localStorage.setItem("careerpath_token", data.token);

      // Save user information if returned by the backend.
      if (data.user) {
        localStorage.setItem(
          "careerpath_user",
          JSON.stringify(data.user)
        );
      }

      // Open the dashboard after successful login.
      navigate({ to: "/dashboard" });
    } catch (err) {
      setError(
        err.message || "Unable to log in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>

        <p className="auth-sub">
          Login to continue your career journey
        </p>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div
            role="alert"
            style={{
              color: "var(--danger)",
              fontSize: "0.9rem",
              marginBottom: "0.75rem",
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
