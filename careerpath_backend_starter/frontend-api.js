// Copy this file into your frontend at src/lib/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function apiRequest(path, { method = "GET", body, token } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {})
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Request failed.");
  return data;
}

export const registerUser = (form) => apiRequest("/auth/register", { method: "POST", body: { name: form.name, email: form.email, password: form.password } });
export const loginUser = (form) => apiRequest("/auth/login", { method: "POST", body: form });
export const getProfile = (token) => apiRequest("/profile", { token });
export const saveProfile = (token, profile) => apiRequest("/profile", { method: "PUT", token, body: profile });
export const submitAssessment = (token, answers) => apiRequest("/assessments", { method: "POST", token, body: { answers } });
export const getCareers = () => apiRequest("/careers");