import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import RecruiterDashboard from "./pages/recruiterPages/RecruiterDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Jobs from "./pages/Jobs";
import axios from "axios";

// users
import UserDashboard from "./pages/userPages/UserDashboard";
import UserApplications from "./pages/userPages/UserApplications";
import SavedJobs from "./pages/userPages/SavedJobs";
import Profile from "./pages/userPages/Profile";

// context api's
import { AuthProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/jobs" element={<Jobs />} />

              {/* recruiter's routes */}
              <Route
                path="recruiterDashboard"
                element={<RecruiterDashboard />}
              />

              {/* user's routes */}
              <Route path="/userDashboard" element={<UserDashboard />} />
              <Route path="/userApplications" element={<UserApplications />} />
              <Route path="/savedJobs" element={<SavedJobs />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
