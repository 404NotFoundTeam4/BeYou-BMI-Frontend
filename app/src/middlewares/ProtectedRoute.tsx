import type { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(): ReactElement {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  // Check token in localStorage. If absent -> redirect to login.
  const user = userData.us_username
  console.log(user)
  if (!user) {
    return <Navigate to="/login"  />;
  }

  // Token exists -> allow child routes to render. Components can fetch user info as needed.
  return <Outlet />;
}
