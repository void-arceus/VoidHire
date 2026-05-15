import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-(--border) bg-(--navbar) backdrop-blur-xl">
            <div className="w-full max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
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
                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex px-4 py-2 rounded-xl border border-(--border) bg-white hover:bg-(--secondary) text-sm font-medium text-(--heading) transition-all duration-200 cursor-pointer">
                        Login
                    </button>

                    <button className="px-4 py-2 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-sm font-medium text-white/95 transition-all duration-200 hover:shadow-md cursor-pointer">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
