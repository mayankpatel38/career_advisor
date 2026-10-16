# CareerPath Advisor backend starter

This is a separate Express API intended to work with the existing React/Vite frontend.

## 1. Requirements
- Node.js 18+ (Node 20+ recommended)
- MongoDB Atlas account and a database user

## 2. Install and configure
Open a terminal in this folder:
```bash
npm install
```
Copy `.env.example` to `.env`. Replace the MongoDB URI with your Atlas connection string, and set a long random `JWT_SECRET`. Never commit `.env` or share your database password.

In MongoDB Atlas, allow your current IP address in Network Access and create a database user. Use the database name `careerpath_advisor` in the connection string.

## 3. Start API
```bash
npm run dev
```
Open `http://localhost:5000/api/health`; you should see JSON with `"status":"ok"`.

## 4. Connect the frontend
Copy `frontend-api.js` to the frontend's `src/lib/api.js`. In the frontend root, create `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```
Restart the Vite server after changing `.env`.

### Register page
Replace the current `submit` handler with:
```jsx
import { registerUser } from "../lib/api";
// inside component:
const submit = async (e) => {
  e.preventDefault();
  setError("");
  if (form.password !== form.confirm) {
    setError("Passwords do not match");
    return;
  }
  try {
    const data = await registerUser(form);
    localStorage.setItem("careerpath_token", data.token);
    localStorage.setItem("careerpath_user", JSON.stringify(data.user));
    navigate({ to: "/profile" });
  } catch (err) {
    setError(err.message);
  }
};
```
Make sure your component already has `setError` and `form` state as in the current Register page.

### Login page
Add `const [error, setError] = useState("");` and import `loginUser` from `../lib/api`. Replace the current `submit` handler:
```jsx
const submit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    const data = await loginUser(form);
    localStorage.setItem("careerpath_token", data.token);
    localStorage.setItem("careerpath_user", JSON.stringify(data.user));
    navigate({ to: "/dashboard" });
  } catch (err) {
    setError(err.message);
  }
};
```
Render `{error && <p role="alert">{error}</p>}` above the Login button.

### Profile API example
```jsx
import { getProfile, saveProfile } from "../lib/api";
const token = localStorage.getItem("careerpath_token");
const data = await getProfile(token); // load profile
await saveProfile(token, { skills, interests, careerGoal }); // save fields
```
Use the same token when calling `/assessments`. The included assessment scoring is a simple starter heuristic, not a scientifically validated career test.

## API endpoints
- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/profile` (Bearer token required)
- `PUT /api/profile` (Bearer token required)
- `POST /api/assessments` (Bearer token required)
- `GET /api/assessments/latest` (Bearer token required)
- `GET /api/careers`
- `GET /api/careers/:id`

## Important
- The frontend uses TanStack Router and Vite; keep the API as a separate server.
- This starter does not yet connect every screen, and internships/projects are not persisted yet.
- For production, use HTTPS, stricter rate limiting, secure token storage, input validation, and appropriate privacy controls.
