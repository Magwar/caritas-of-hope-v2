import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// ── Public pages ──────────────────────────────────
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Trainings from "./pages/Trainings";
import Contact from "./pages/Contact";

// ── Auth pages ─────────────────────────────────────────────────────
import Login from "./pages/Login";
import Register from "./pages/Register";

// ── Portal pages ───────────────────────────────────────────────────
import PortalDashboard from "./pages/portal/Dashboard";
import WorkLogs from "./pages/portal/WorkLogs";
import Projects from "./pages/portal/Projects";
import AdminLogs from "./pages/portal/admin/Logs";
import AdminProjects from "./pages/portal/admin/Projects";
import AdminUsers from "./pages/portal/admin/Users";
import AdminContent from "./pages/portal/admin/Content";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Portal — all protected */}
          <Route
            path="/portal"
            element={
              <ProtectedRoute>
                <PortalDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/worklogs"
            element={
              <ProtectedRoute>
                <WorkLogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/projects"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/admin/logs"
            element={
              <ProtectedRoute>
                <AdminLogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/admin/projects"
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/admin/users"
            element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portal/admin/content"
            element={
              <ProtectedRoute>
                <AdminContent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
