import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecruiterDashboard from "./pages/RecruiterDashboard";

const App = () => {
    return (
        <main className="min-h-screen w-full bg-(--background)">
            <Navbar />
            <RecruiterDashboard />
        </main>
    );
};

export default App;
