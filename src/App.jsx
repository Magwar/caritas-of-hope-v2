import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

// ── Public pages (stubs — built in Phase 3) ──────────────────────────────────
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

// ── Auth pages (Phase 4) ─────────────────────────────────────────────────────
import Login from "./pages/Login";
import Register from "./pages/Register";

// ── Portal pages (Phase 5) ───────────────────────────────────────────────────
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
          {/* ── Public pages — all wrapped in Navbar + Footer layout ── */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/programs"
            element={
              <Layout>
                <Programs />
              </Layout>
            }
          />
          <Route
            path="/programs/:slug"
            element={
              <Layout>
                <ProgramDetail />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <BlogPost />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Layout>
                <Testimonials />
              </Layout>
            }
          />
          <Route
            path="/trainings"
            element={
              <Layout>
                <Trainings />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          {/* ── Auth — no main layout, own full-screen design in Phase 4 ── */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ── Portal — protected, own sidebar layout in Phase 5 ── */}
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
