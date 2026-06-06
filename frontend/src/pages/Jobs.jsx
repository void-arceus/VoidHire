import { useState, useEffect } from "react";
import { getJobs, saveJob } from "../api/jobs.api";
import { apply } from "../api/applications.api";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContest";
import Loading from "../Animations/Loading";

const Jobs = () => {
    const [jobData, setJobData] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { showToast } = useToast();

    useEffect(() => {
        fetchJobs();
    }, []);

    async function fetchJobs() {
        try {
            const result = await getJobs();
            setLoading(true);
            if (result.status === 200) {
                setJobData(result.data.data);
            } else {
                setJobData(null);
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            // later i'll add toaster message
        } finally {
            setLoading(false);
        }
    }

    async function handleSaveJob(jobid) {
        try {
            const result = await saveJob(jobid);
            const message =
                result.data.data.message || "Job Saved Successfully";
            showToast(message, "success");
        } catch (err) {
            const message = err.response.data.message || "Something went wrong";
            showToast(message, "error");
            return;
        }
    }

    async function handleApplyToJob(jobid) {
        try {
            const result = await apply(jobid);
            if (result.status === 201 || result.status === 200) {
                const message = result.data.data.data.message;
                showToast(message, "success");
            } else {
                const message =
                    result.response.data.message || "Something went wrong";
                showToast(message, "error");
            }
        } catch (err) {
            showToast("Something went wrong", "error");
            return;
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
                {loading ? (
                    <div className="w-full flex items-center justify-center">
                        <Loading />
                    </div>
                ) : (
                    <div className="w-full">
                        {/* job card for testing */}
                        {jobData ? (
                            <div className="w-full flex flex-col items-center gap-6 pb-10">
                                {/* job card */}
                                {jobData.map((job) => (
                                    <div
                                        key={job.id}
                                        className="w-full max-w-3xl border border-(--border) rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="flex flex-col gap-5">
                                            {/* Top Section */}
                                            <div className="flex flex-col space-y-1">
                                                <h1 className="text-2xl font-semibold text-(--heading)">
                                                    {job.jobtitle}
                                                </h1>

                                                <p className="text-sm tracking-wide text-(--text)">
                                                    {job.companyname}
                                                </p>
                                            </div>
                                            {/* Metadata */}
                                            <div className="flex flex-wrap items-center gap-2 text-sm text-(--text)">
                                                <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                                    {job.location}
                                                </span>

                                                <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                                    {job.salary}
                                                </span>

                                                <span className="px-3 py-1 rounded-full bg-(--secondary-hover)">
                                                    {job.experience}
                                                </span>
                                            </div>
                                            {/* Description */}
                                            <p className="text-sm leading-6 text-(--text) line-clamp-3">
                                                {job.jobdescription}
                                            </p>
                                            {/* Bottom Section */}
                                            <div className="flex items-center justify-between pt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        handleSaveJob(job.id);
                                                    }}
                                                    className="text-sm text-(--text) hover:text-(--heading) cursor-pointer transition-colors duration-200"
                                                >
                                                    Save Job
                                                </button>

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            navigate(
                                                                `/jobdetail/${job.id}`,
                                                            );
                                                        }}
                                                        className="bg-(--secondary) hover:bg-(--secondary-hover) px-3 py-2 rounded-xl text-(--text) text-sm font-medium hover:cursor-pointer transition-all duration-200s"
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            handleApplyToJob(
                                                                job.id,
                                                            );
                                                        }}
                                                        className="bg-(--primary) hover:bg-(--primary-hover) text-white px-3 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:cursor-pointer transition-all duration-200"
                                                    >
                                                        Apply Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full flex items-center justify-center">
                                <h1 className="text-2xl text-shadow-lg font-bold text-(--error)">
                                    No jobs were found
                                </h1>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Jobs;
