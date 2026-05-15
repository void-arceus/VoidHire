import React from "react";

const LandingPage = () => {
    return (
        <main className="w-full h-screen pt-12">
            {/*  hero sectino */}
            <section className="relative w-full min-h-screen overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-(--primary)/10 blur-3xl rounded-full"></div>

                <div className="relative w-full max-w-6xl mx-auto px-4 py-24 flex flex-col items-center justify-center gap-10 text-center">
                    <div className="w-full max-w-3xl flex flex-col items-center gap-5">
                        <div className="px-4 py-1.5 rounded-full border border-(--border) bg-white shadow-sm">
                            <p className="text-xs font-medium text-(--text)">
                                Modern Hiring Platform
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-(--heading) leading-tight tracking-tight">
                                Built for developers.
                                <br />
                                Designed for recruiters.
                            </h1>

                            <p className="text-sm md:text-base text-(--text) max-w-2xl leading-relaxed">
                                VoidHire helps recruiters connect with talented
                                developers through a fast, clean, and modern
                                hiring experience built for both sides of the
                                hiring journey.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <button className="w-full sm:w-fit px-5 py-2.5 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-sm font-medium text-white/95 transition-all duration-200 hover:shadow-md cursor-pointer">
                                Get Started
                            </button>

                            <button className="w-full sm:w-fit px-5 py-2.5 rounded-xl border border-(--border) bg-white hover:bg-(--secondary) text-sm font-medium text-(--heading) transition-all duration-200 cursor-pointer">
                                Explore Jobs
                            </button>
                        </div>
                    </div>

                    {/* Preview Card */}
                    <div className="w-full max-w-4xl border border-(--border) rounded-3xl bg-white shadow-sm p-6 md:p-8 flex flex-col gap-6 overflow-hidden">
                        {/* Top Bar */}
                        <div className="w-full flex items-center justify-between gap-4">
                            <div className="flex flex-col items-start">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Frontend Developer
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Remote • Full Time
                                </p>
                            </div>

                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                Featured
                            </span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                React
                            </span>

                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                Node.js
                            </span>

                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                MongoDB
                            </span>

                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                TailwindCSS
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-(--border) rounded-2xl p-4 flex flex-col gap-2 bg-(--secondary)">
                                <p className="text-xs text-(--text)">
                                    Applicants
                                </p>

                                <h4 className="text-2xl font-bold text-(--heading)">
                                    128+
                                </h4>
                            </div>

                            <div className="border border-(--border) rounded-2xl p-4 flex flex-col gap-2 bg-(--secondary)">
                                <p className="text-xs text-(--text)">
                                    Hiring Progress
                                </p>

                                <div className="w-full h-2 rounded-full bg-white overflow-hidden mt-2">
                                    <div className="w-2/3 h-full bg-(--primary) rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* choose your path */}
            <section className="w-full py-14">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-10">
                    <div className="w-full text-center flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-(--heading)">
                            Choose Your Path
                        </h2>

                        <p className="text-sm text-(--text)">
                            Whether you're hiring talent or searching for
                            opportunities, VoidHire is built for both sides.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group w-full border border-(--border) rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6 overflow-hidden">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-xl bg-(--secondary) flex items-center justify-center text-xl">
                                        👨‍💼
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-(--heading)">
                                            Hire Faster
                                        </h3>

                                        <p className="text-sm text-(--text) leading-relaxed">
                                            Streamline your hiring workflow and
                                            discover skilled developers quickly.
                                        </p>
                                    </div>
                                </div>

                                <span className="text-xs px-3 py-1 rounded-full bg-(--secondary) text-(--text)">
                                    Recruiters
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-3 text-sm text-(--text)">
                                <li className="flex items-center gap-2">
                                    <span className="text-(--primary)">✓</span>
                                    Post jobs in seconds
                                </li>

                                <li className="flex items-center gap-2">
                                    <span className="text-(--primary)">✓</span>
                                    Filter quality developers
                                </li>

                                <li className="flex items-center gap-2">
                                    <span className="text-(--primary)">✓</span>
                                    Manage applicants easily
                                </li>
                            </ul>

                            {/* CTA */}
                            <button className="w-fit px-4 py-2 bg-(--primary) hover:bg-(--primary-hover) rounded-xl text-sm text-white/95 font-medium cursor-pointer transition-all duration-200 hover:shadow-md">
                                Start Hiring
                            </button>
                        </div>

                        {/* Developer Card */}
                        <div className="group w-full border border-(--border) rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6 overflow-hidden md:translate-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-xl bg-(--secondary) flex items-center justify-center text-xl">
                                        👨‍💻
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-(--heading)">
                                            Find Better Jobs
                                        </h3>

                                        <p className="text-sm text-(--text) leading-relaxed">
                                            Discover opportunities that match
                                            your skills, goals, and interests.
                                        </p>
                                    </div>
                                </div>

                                <span className="text-xs px-3 py-1 rounded-full bg-(--secondary) text-(--text)">
                                    Developers
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-3 text-sm text-(--text)">
                                <li className="flex items-center gap-2">
                                    <span className="text-(--primary)">✓</span>
                                    Apply in one click
                                </li>

                                <li className="flex items-center gap-2">
                                    <span className="text-(--primary)">✓</span>
                                    Track applications
                                </li>

                                <li className="flex items-center gap-2">
                                    <span className="text-(--primary)">✓</span>
                                    Get matched with companies
                                </li>
                            </ul>

                            {/* CTA */}
                            <button className="w-fit px-4 py-2 bg-(--primary) hover:bg-(--primary-hover) rounded-xl text-sm text-white/95 font-medium cursor-pointer transition-all duration-200 hover:shadow-md">
                                Find Jobs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* how it works */}
            <section className="w-full py-14">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-10">
                    <div className="w-full text-center flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-(--heading)">
                            How VoidHire Works
                        </h2>

                        <p className="text-sm text-(--text)">
                            From signup to hiring in three simple steps
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="border border-(--border) rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
                            <div className="w-10 h-10 rounded-full bg-(--secondary) flex items-center justify-center text-sm font-semibold text-(--heading)">
                                01
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Create Your Profile
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Sign up as a recruiter or developer and
                                    build your profile in minutes.
                                </p>
                            </div>

                            <div className="w-full h-1 bg-(--secondary) rounded-full overflow-hidden">
                                <div className="w-1/3 h-full bg-(--primary) rounded-full"></div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-(--border) rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 md:translate-y-3">
                            <div className="w-10 h-10 rounded-full bg-(--secondary) flex items-center justify-center text-sm font-semibold text-(--heading)">
                                02
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Discover Opportunities
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Developers explore jobs while recruiters
                                    discover skilled candidates.
                                </p>
                            </div>

                            <div className="w-full h-1 bg-(--secondary) rounded-full overflow-hidden">
                                <div className="w-2/3 h-full bg-(--primary) rounded-full"></div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-(--border) rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 md:translate-y-6">
                            <div className="w-10 h-10 rounded-full bg-(--secondary) flex items-center justify-center text-sm font-semibold text-(--heading)">
                                03
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Connect & Hire
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Apply, shortlist, and connect through a fast
                                    and modern hiring flow.
                                </p>
                            </div>

                            <div className="w-full h-1 bg-(--secondary) rounded-full overflow-hidden">
                                <div className="w-full h-full bg-(--primary) rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features */}
            <section className="w-full py-14">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-10">
                    <div className="w-full text-center flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-(--heading)">
                            Powerful Features Built for Modern Hiring
                        </h2>

                        <p className="text-sm text-(--text)">
                            Everything recruiters and developers need in one
                            streamlined platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[220px]">
                        {/* Large Card */}
                        <div className="md:col-span-2 md:row-span-2 border border-(--border) rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-xl bg-(--secondary) flex items-center justify-center text-(--heading) font-bold">
                                    🚀
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-semibold text-(--heading)">
                                        Track Every Application
                                    </h3>

                                    <p className="text-sm text-(--text) leading-relaxed">
                                        Developers can monitor application
                                        progress while recruiters manage
                                        candidates through a clean and organized
                                        dashboard.
                                    </p>
                                </div>
                            </div>

                            {/* Mock UI */}
                            <div className="w-full border border-(--border) rounded-xl p-4 bg-(--secondary) flex flex-col gap-3">
                                <div className="w-full flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium text-(--heading)">
                                            Frontend Developer
                                        </h4>
                                        <p className="text-xs text-(--text)">
                                            Application Status
                                        </p>
                                    </div>

                                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                                        Reviewing
                                    </span>
                                </div>

                                <div className="w-full h-2 rounded-full bg-white overflow-hidden">
                                    <div className="w-2/3 h-full bg-(--primary) rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Small Card 1 */}
                        <div className="border border-(--border) rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 justify-between">
                            <div className="w-10 h-10 rounded-lg bg-(--secondary) flex items-center justify-center">
                                🔐
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Secure Authentication
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Safe and role-based login system for
                                    recruiters and developers.
                                </p>
                            </div>
                        </div>

                        {/* Small Card 2 */}
                        <div className="border border-(--border) rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 justify-between">
                            <div className="w-10 h-10 rounded-lg bg-(--secondary) flex items-center justify-center">
                                ⚡
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Fast Job Posting
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Recruiters can publish opportunities in just
                                    a few clicks.
                                </p>
                            </div>
                        </div>

                        {/* Wide Card */}
                        <div className="md:col-span-2 border border-(--border) rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                            <div className="flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-lg bg-(--secondary) flex items-center justify-center">
                                    🎯
                                </div>

                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Smart Candidate Filtering
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Recruiters can quickly filter candidates
                                    based on skills, experience, and role
                                    preferences.
                                </p>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs px-3 py-1 rounded-full bg-(--secondary) text-(--text)">
                                    React
                                </span>

                                <span className="text-xs px-3 py-1 rounded-full bg-(--secondary) text-(--text)">
                                    Node.js
                                </span>

                                <span className="text-xs px-3 py-1 rounded-full bg-(--secondary) text-(--text)">
                                    MongoDB
                                </span>

                                <span className="text-xs px-3 py-1 rounded-full bg-(--secondary) text-(--text)">
                                    Remote
                                </span>
                            </div>
                        </div>

                        {/* Small Card 3 */}
                        <div className="border border-(--border) rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 justify-between">
                            <div className="w-10 h-10 rounded-lg bg-(--secondary) flex items-center justify-center">
                                📄
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Clean Profiles
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Showcase skills, projects, and experience
                                    through modern profiles.
                                </p>
                            </div>
                        </div>

                        {/* Small Card 4 */}
                        <div className="border border-(--border) rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 justify-between">
                            <div className="w-10 h-10 rounded-lg bg-(--secondary) flex items-center justify-center">
                                🌎
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-(--heading)">
                                    Remote Friendly
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Discover opportunities from startups and
                                    companies worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  proof section */}
            <section className="w-full py-14">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <div className="w-full border border-(--border) rounded-3xl bg-white shadow-sm px-6 py-10 md:px-10 md:py-12 flex flex-col gap-10 overflow-hidden">
                        {/* Heading */}
                        <div className="w-full text-center flex flex-col gap-3">
                            <h2 className="text-2xl md:text-3xl font-bold text-(--heading)">
                                Trusted by recruiters and developers
                            </h2>

                            <p className="text-sm md:text-base text-(--text) max-w-2xl mx-auto leading-relaxed">
                                VoidHire streamlines the hiring experience with
                                faster workflows, cleaner profiles, and better
                                opportunities for modern teams.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Stat 1 */}
                            <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-(--heading)">
                                    10K+
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Applications Sent
                                </p>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-(--heading)">
                                    500+
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Recruiters Joined
                                </p>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-(--heading)">
                                    2K+
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Developer Profiles
                                </p>
                            </div>

                            {/* Stat 4 */}
                            <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <h3 className="text-3xl md:text-4xl font-bold text-(--heading)">
                                    98%
                                </h3>

                                <p className="text-sm text-(--text)">
                                    Faster Hiring Flow
                                </p>
                            </div>
                        </div>

                        {/* Bottom Trust Strip */}
                        <div className="w-full border-t border-(--border) pt-6 flex flex-wrap items-center justify-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                Remote Friendly
                            </span>

                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                Role-Based Platform
                            </span>

                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                Secure Authentication
                            </span>

                            <span className="px-3 py-1 rounded-full bg-(--secondary) text-xs text-(--text)">
                                Modern Hiring Workflow
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="w-full py-14">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <div className="relative overflow-hidden border border-(--border) rounded-3xl bg-white shadow-sm px-6 py-14 md:px-12 flex flex-col items-center text-center gap-6">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-(--primary)/10 blur-3xl rounded-full"></div>

                        <div className="relative flex flex-col items-center gap-4 max-w-2xl">
                            <span className="px-4 py-1.5 rounded-full border border-(--border) bg-(--secondary) text-xs text-(--text)">
                                Start Your Journey
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-(--heading) leading-tight">
                                Build meaningful connections through modern
                                hiring
                            </h2>

                            <p className="text-sm md:text-base text-(--text) leading-relaxed">
                                Whether you're searching for top developers or
                                looking for your next opportunity, VoidHire
                                helps you move faster with a clean and modern
                                hiring experience.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="relative flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <button className="w-full sm:w-fit px-5 py-2.5 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-sm font-medium text-white/95 transition-all duration-200 hover:shadow-md cursor-pointer">
                                Get Started
                            </button>

                            <button className="w-full sm:w-fit px-5 py-2.5 rounded-xl border border-(--border) bg-white hover:bg-(--secondary) text-sm font-medium text-(--heading) transition-all duration-200 cursor-pointer">
                                Explore Jobs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full border-t border-(--border) py-10 mt-6">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-10">
                    {/* Top Footer */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-(--primary) flex items-center justify-center shadow-sm">
                                    <span className="text-white font-bold text-sm">
                                        V
                                    </span>
                                </div>

                                <div className="flex flex-col leading-none">
                                    <h2 className="text-lg font-bold text-(--heading)">
                                        VoidHire
                                    </h2>

                                    <p className="text-xs text-(--text)">
                                        Modern Hiring Platform
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-(--text) leading-relaxed">
                                Connecting recruiters and developers through a
                                faster, cleaner, and smarter hiring experience.
                            </p>
                        </div>

                        {/* Product */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold text-(--heading)">
                                Product
                            </h3>

                            <div className="flex flex-col gap-3 text-sm text-(--text)">
                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Features
                                </a>

                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Explore Jobs
                                </a>

                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Recruiters
                                </a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold text-(--heading)">
                                Resources
                            </h3>

                            <div className="flex flex-col gap-3 text-sm text-(--text)">
                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Documentation
                                </a>

                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Support
                                </a>

                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold text-(--heading)">
                                Connect
                            </h3>

                            <div className="flex flex-col gap-3 text-sm text-(--text)">
                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Github
                                </a>

                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="#"
                                    className="hover:text-(--heading) transition-all duration-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="w-full border-t border-(--border) pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-(--text)">
                            © 2026 VoidHire. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4 text-sm text-(--text)">
                            <a
                                href="#"
                                className="hover:text-(--heading) transition-all duration-200"
                            >
                                Terms
                            </a>

                            <a
                                href="#"
                                className="hover:text-(--heading) transition-all duration-200"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="hover:text-(--heading) transition-all duration-200"
                            >
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default LandingPage;
