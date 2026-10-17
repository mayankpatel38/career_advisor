
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { apiRequest } from "../lib/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const data = await apiRequest("/api/auth/register", {
        method: "POST",
        body: {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password
        }
      });

      // Save authentication information
      if (data.token) {
        localStorage.setItem("careerpath_token", data.token);
      }

      if (data.user) {
        localStorage.setItem(
          "careerpath_user",
          JSON.stringify(data.user)
        );
      }

      alert("Registration successful!");
      navigate({ to: data.token ? "/profile" : "/login" });

    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h1>Create Account</h1>
        <p className="auth-sub">
          Start planning your future today
        </p>

        <div className="form-group">
          <label>Full Name</label>
          <input
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            required
            minLength={8}
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            required
            value={form.confirm}
            onChange={(e) =>
              setForm({ ...form, confirm: e.target.value })
            }
          />
        </div>

        {error && (
          <div
            role="alert"
            style={{
              color: "var(--danger)",
              fontSize: "0.9rem",
              marginBottom: "0.75rem"
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
          {loading ? "Creating account..." : "Register"}
        </button>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
