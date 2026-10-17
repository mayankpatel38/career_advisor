
import { useEffect, useState } from "react";
import { skillsList, interestsList } from "../data/mockData";
import { apiRequest } from "../lib/api";

const emptyProfile = {
  name: "",
  email: "",
  age: "",
  location: "",
  phone: "",
  institution: "",
  degree: "",
  year: "",
  cgpa: "",
  skills: [],
  interests: [],
  careerGoal: "",
};

export default function Profile() {
  const [profile, setProfile] = useState(emptyProfile);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const token = localStorage.getItem("careerpath_token");

        if (!token) {
          throw new Error("Please log in to view your profile.");
        }

        const data = await apiRequest("/api/profile", { token });

        if (active) {
          setProfile({
            ...emptyProfile,
            ...(data.profile || {}),
            skills: Array.isArray(data.profile?.skills)
              ? data.profile.skills
              : [],
            interests: Array.isArray(data.profile?.interests)
              ? data.profile.interests
              : [],
          });
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Could not load your profile.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadProfile();

    return () => {
      active = false;
    };
  }, []);

  const updateField = (e) => {
    const { name, value } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const toggle = (field, item) => {
    setProfile((previous) => {
      const current = previous[field] || [];

      return {
        ...previous,
        [field]: current.includes(item)
          ? current.filter((value) => value !== item)
          : [...current, item],
      };
    });
  };

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("careerpath_token");

      if (!token) {
        throw new Error("Please log in before saving your profile.");
      }

      const payload = {
        age: profile.age === "" ? "" : Number(profile.age),
        location: profile.location,
        phone: profile.phone,
        institution: profile.institution,
        degree: profile.degree,
        year: profile.year,
        cgpa: profile.cgpa === "" ? "" : Number(profile.cgpa),
        skills: profile.skills,
        interests: profile.interests,
        careerGoal: profile.careerGoal,
      };

      const data = await apiRequest("/api/profile", {
        method: "PUT",
        token,
        body: payload,
      });

      if (data.profile) {
        setProfile((previous) => ({
          ...previous,
          ...data.profile,
          skills: Array.isArray(data.profile.skills)
            ? data.profile.skills
            : previous.skills,
          interests: Array.isArray(data.profile.interests)
            ? data.profile.interests
            : previous.interests,
        }));
      }

      setMessage(data.message || "Profile saved successfully!");
    } catch (err) {
      setError(err.message || "Could not save your profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="container">Loading your profile...</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">Student Profile</h1>
      <p className="page-subtitle">
        Tell us about yourself to get accurate career recommendations.
      </p>

      {error && (
        <p role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}

      <form onSubmit={save}>
        <div className="section-card">
          <h3>Personal Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input value={profile.name || ""} readOnly />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input value={profile.email || ""} readOnly />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                name="age"
                type="number"
                min="1"
                max="120"
                value={profile.age ?? ""}
                onChange={updateField}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                name="location"
                value={profile.location || ""}
                onChange={updateField}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={profile.phone || ""}
                onChange={updateField}
              />
            </div>
          </div>
        </div>

        <div className="section-card">
          <h3>Education Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Institution</label>
              <input
                name="institution"
                value={profile.institution || ""}
                onChange={updateField}
              />
            </div>

            <div className="form-group">
              <label>Degree</label>
              <input
                name="degree"
                value={profile.degree || ""}
                onChange={updateField}
              />
            </div>

            <div className="form-group">
              <label>Year</label>
              <input
                name="year"
                value={profile.year || ""}
                onChange={updateField}
              />
            </div>

            <div className="form-group">
              <label>CGPA</label>
              <input
                name="cgpa"
                type="number"
                min="0"
                max="10"
                step="0.01"
                value={profile.cgpa ?? ""}
                onChange={updateField}
              />
            </div>
          </div>
        </div>

        <div className="section-card">
          <h3>Skills</h3>
          <div className="chip-list">
            {skillsList.map((skill) => (
              <button
                key={skill}
                type="button"
                className={`chip ${
                  profile.skills.includes(skill) ? "selected" : ""
                }`}
                aria-pressed={profile.skills.includes(skill)}
                onClick={() => toggle("skills", skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="section-card">
          <h3>Interests</h3>
          <div className="chip-list">
            {interestsList.map((interest) => (
              <button
                key={interest}
                type="button"
                className={`chip ${
                  profile.interests.includes(interest) ? "selected" : ""
                }`}
                aria-pressed={profile.interests.includes(interest)}
                onClick={() => toggle("interests", interest)}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className="section-card">
          <h3>Career Goal</h3>
          <div className="form-group">
            <label>What's your dream role?</label>
            <textarea
              name="careerGoal"
              rows="3"
              value={profile.careerGoal || ""}
              onChange={updateField}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-large"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Profile"}
        </button>

        {message && (
          <p role="status" style={{ color: "green", fontWeight: 600 }}>
            ✓ {message}
          </p>
        )}
      </form>
    </div>
  );
}
