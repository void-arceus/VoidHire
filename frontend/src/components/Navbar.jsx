import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    // dummy isloggedIN
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isRecruiter, setIsRecruiter] = useState(true);

    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-(--border) bg-(--navbar) backdrop-blur-xl">
            <div className="w-full max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={() => {
                        navigate("/");
                    }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <div className="w-9 h-9 rounded-xl bg-(--primary) flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">V</span>
                    </div>

                    <div className="flex flex-col leading-none">
                        <h1 className="text-lg font-bold text-(--heading)">
                            VoidHire
                        </h1>

                        <p className="text-[11px] text-(--text)">
                            Modern Hiring Platform
                        </p>
                    </div>
                </div>

                {/* Navigation Actions */}
                {isLoggedIn ? (
                    // if recruiter
                    isRecruiter ? (
                        <div className="flex">
                            <ul className="flex items-center gap-6">
                                <li className="text-sm text-(--text) font-semibold cursor-pointer hover:text-(--primary) transition-all duration-200">
                                    Dashboard
                                </li>
                                <li className="text-sm text-(--text) font-semibold cursor-pointer hover:text-(--primary) transition-all duration-200">
                                    My Jobs
                                </li>
                                <li className="text-sm text-(--text) font-semibold cursor-pointer hover:text-(--primary) transition-all duration-200">
                                    Applicants
                                </li>
                                <button className="text-sm bg-(--primary) hover:bg-(--primary-hover) px-4 py-2 rounded-xl text-white/95 font-medium cursor-pointer shadow-sm hover:shadow-md transition-all duration-200">
                                    Post Job
                                </button>
                            </ul>
                        </div>
                    ) : (
                        <div></div>
                    )
                ) : (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                navigate("/login");
                            }}
                            className="hidden sm:flex px-4 py-2 rounded-xl border border-(--border) bg-white hover:bg-(--secondary) text-sm font-medium text-(--heading) transition-all duration-200 cursor-pointer"
                        >
                            Login
                        </button>

                        <button
                            onClick={() => {
                                navigate("/register");
                            }}
                            className="px-4 py-2 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-sm font-medium text-white/95 transition-all duration-200 hover:shadow-md cursor-pointer"
                        >
                            Get Started
                        </button>
                    </div>
                )}
                {isLoggedIn ? (
                    <div className="flex items-center gap-4">
                        <button className="bg-(--secondary) px-4 py-2.5 rounded-xl text-sm hover:bg-(--secondary-hover) font-semibold text-(--text) cursor-pointer transition-all duration-200">
                            Logout
                        </button>
                        <div className="bg-(--primary) w-10 h-10 flex items-center justify-center rounded-xl font-semibold text-white/95 shadow-md hover:shadow-lg cursor-pointer hover:bg-(--primary-hover) transition-all duration-200">
                            A
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;
