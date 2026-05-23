import { useState, useEffect } from "react";
import { getJobs } from "../api/jobs.api";

const Jobs = () => {
    const [jobData, setJobData] = useState(null);

    useEffect(() => {
        fetchJobs();
    }, []);

    async function fetchJobs() {
        try {
            const result = await getJobs();
            if (result.status === 200) {
                console.log("Jobs:", result.data.data);
                setJobData(result.data.data);
            } else {
                setJobData(null);
            }
        } catch (err) {
            console.log(err);
            // later i'll add toaster message
        }
    }

    return (
        <main className="min-h-screen w-full pt-17 flex flex-col items-center">
            <div className="w-full max-w-6xl flex flex-col items-center px-4">
                {/* search bar */}
                <div className="w-full max-w-3xl py-10 flex items-center gap-4">
                    {/* input div */}
                    <div className="w-full flex items-center border border-(--primary) rounded-full focus-within:border-(--primary-hover) transition-all duration-200">
                        <input
                            className="w-1/2 p-2.5 px-3.5 outline-0 ring-0 transition-all duration-200"
                            placeholder="Job Title"
                        />
                        <span className="text-(--text)">|</span>
                        <input
                            className="w-1/2 p-2.5 outline-0 ring-0 transition-all duration-200"
                            placeholder="Location"
                        />
                    </div>
                    <button className="bg-(--primary) hover:bg-(--primary-hover) text-white/95 font-medium px-5 py-2.5 rounded-3xl cursor-pointer shadow-sm hover:shadow-md transition-all duration-200">
                        Search
                    </button>
                </div>

                {/* jobs div */}
                <div className="w-full">
                    {/* job card for testing */}
                    {jobData ? (
                        <div className="w-full flex flex-col items-center gap-6 pb-10">
                            {/* job card */}
                            <div className="w-full max-w-3xl border border-(--border) rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200">
                                <div className="flex flex-col gap-5">
                                    {/* Top Section */}
                                    <div className="flex flex-col space-y-1">
                                        <h1 className="text-2xl font-semibold text-(--heading)">
                                            Backend Developer
                                        </h1>

                                        <p className="text-sm tracking-wide text-(--text)">
                                            Void Technologies
                                        </p>
                                    </div>

                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-(--text)">
                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            Remote
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            ₹12 LPA
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            2+ Years Experience
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm leading-6 text-(--text) line-clamp-3">
                                        We are looking for a frontend developer
                                        with strong React and Tailwind CSS
                                        skills to help build clean, scalable and
                                        modern interfaces for our hiring
                                        platform.
                                    </p>

                                    {/* Bottom Section */}
                                    <div className="flex items-center justify-between pt-2">
                                        <button className="text-sm text-(--text) hover:text-(--heading) cursor-pointer transition-colors duration-200">
                                            Save Job
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <button className="bg-(--secondary) hover:bg-(--secondary-hover) px-3 py-2 rounded-xl text-(--text) text-sm font-medium hover:cursor-pointer transition-all duration-200s">
                                                View Details
                                            </button>
                                            <button className="bg-(--primary) hover:bg-(--primary-hover) text-white px-3 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:cursor-pointer transition-all duration-200">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-3xl border border-(--border) rounded-3xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200">
                                <div className="flex flex-col gap-5">
                                    {/* Top Section */}
                                    <div className="flex flex-col space-y-1">
                                        <h1 className="text-2xl font-semibold text-(--heading)">
                                            Full Stack Developer
                                        </h1>

                                        <p className="text-sm tracking-wide text-(--text)">
                                            Void Technologies
                                        </p>
                                    </div>

                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-(--text)">
                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            Remote
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            ₹12 LPA
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            2+ Years Experience
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm leading-6 text-(--text) line-clamp-3">
                                        We are looking for a frontend developer
                                        with strong React and Tailwind CSS
                                        skills to help build clean, scalable and
                                        modern interfaces for our hiring
                                        platform.
                                    </p>

                                    {/* Bottom Section */}
                                    <div className="flex items-center justify-between pt-2">
                                        <button className="text-sm text-(--text) hover:text-(--heading) transition-colors duration-200">
                                            Save Job
                                        </button>

                                        <button className="bg-(--primary) hover:bg-(--primary-hover) text-white px-5 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md  hover:cursor-pointer transition-all duration-200">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-3xl border border-(--border) rounded-3xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200">
                                <div className="flex flex-col gap-5">
                                    {/* Top Section */}
                                    <div className="flex flex-col space-y-1">
                                        <h1 className="text-2xl font-semibold text-(--heading)">
                                            Frontend Developer
                                        </h1>

                                        <p className="text-sm tracking-wide text-(--text)">
                                            Void Technologies
                                        </p>
                                    </div>

                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-(--text)">
                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            Remote
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            ₹12 LPA
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                            2+ Years Experience
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm leading-6 text-(--text) line-clamp-3">
                                        We are looking for a frontend developer
                                        with strong React and Tailwind CSS
                                        skills to help build clean, scalable and
                                        modern interfaces for our hiring
                                        platform.
                                    </p>

                                    {/* Bottom Section */}
                                    <div className="flex items-center justify-between pt-2">
                                        <button className="text-sm text-(--text) hover:text-(--heading) transition-colors duration-200">
                                            Save Job
                                        </button>

                                        <button className="bg-(--primary) hover:bg-(--primary-hover) text-white px-5 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:cursor-pointer transition-all duration-200">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Jobs;
