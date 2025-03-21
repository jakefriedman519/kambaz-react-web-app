import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute.tsx";
import EnrollmentProtectedRoute from "./Courses/ProtectedRoute.tsx";
export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <EnrollmentProtectedRoute>
                  <Courses />
                </EnrollmentProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/Calendar"
            element={<h1 className="mt-3">Calendar</h1>}
          />
          <Route path="/Inbox" element={<h1 className="mt-3">Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
