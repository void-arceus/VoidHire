import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../api/auth.api";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { getUser } = useAuth();

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    const result = await login(dataObj);
    if (result.status === 200) {
      getUser();
      if (result.data.data.role === "user") {
        navigate("/userDashboard");
      } else {
        navigate("/recruiterDashboard");
      }
    }
  }

  return (
    <section className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full min-h-screen max-w-6xl pt-16 px-4 flex items-center justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-md border border-(--border) shadow-md py-8 px-4 rounded-3xl flex flex-col gap-4 transition-all duration-300"
        >
          <div className="w-full">
            <h2 className="text-center text-2xl font-bold text-(--heading)">
              Login
            </h2>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-(--text)">Email</label>
            <input
              placeholder="email"
              type="email"
              name="email"
              className="border border-(--border) w-full p-2.5 rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-300 placeholder:text-(--text) placeholder:text-sm"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-(--text)">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="border border-(--border) w-full p-2.5 rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-300 placeholder:text-(--text) placeholder:text-sm"
              required
            />
          </div>

          {/* forgot password */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-sm text-(--text)">
              Don't have an account?&nbsp;
              <a
                onClick={() => {
                  navigate("/register");
                }}
                className="text-(--heading) hover:text-(--text) font-semibold cursor-pointer"
              >
                Create New
              </a>
            </p>
            <a className="text-sm text-(--heading) hover:text-(--text) font-semibold cursor-pointer">
              Forgot Password
            </a>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button
              type="submit"
              className="bg-(--primary) hover:bg-(--primary-hover) text-white/95 font-medium text-base rounded-xl p-2.5 cursor-pointer"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
              className="bg-(--secondary) hover:bg-(--secondary-hover) border border-(--border) text-black font-medium text-base rounded-xl p-2.5 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
