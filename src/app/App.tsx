import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "next-themes";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import TodayPage from "./pages/TodayPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import LessonViewPage from "./pages/LessonViewPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import AssignmentSubmissionPage from "./pages/AssignmentSubmissionPage";
import FeedbackPage from "./pages/FeedbackPage";
import ProgressPage from "./pages/ProgressPage";
import CalendarPage from "./pages/CalendarPage";
import CertificatesPage from "./pages/CertificatesPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import LeadersPage from "./pages/LeadersPage";
import PointShopPage from "./pages/PointShopPage";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard Routes */}
          <Route path="/app" element={<DashboardLayout />}>
            <Route
              index
              element={<Navigate to="/app/dashboard" replace />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="today" element={<TodayPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route
              path="courses/:id"
              element={<CourseDetailPage />}
            />
            <Route
              path="lessons/:id"
              element={<LessonViewPage />}
            />
            <Route
              path="assignments"
              element={<AssignmentsPage />}
            />
            <Route
              path="assignments/:id"
              element={<AssignmentSubmissionPage />}
            />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route
              path="certificates"
              element={<CertificatesPage />}
            />
            <Route
              path="notifications"
              element={<NotificationsPage />}
            />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="leaders" element={<LeadersPage />} />
            <Route
              path="pointshop"
              element={<PointShopPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}