import { useState, useEffect } from "react";
import { getSavedJobs } from "../../api/jobs.api";

const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState(null);

    useEffect(() => {
        handleGetSavedJobs();
    }, []);

    async function handleGetSavedJobs() {
        try {
            const result = await getSavedJobs();
            console.log(result.data.data);
            setSavedJobs(result.data.data);
        } catch (err) {
            console.error(err);
            setSavedJobs(null);
        }
    }

    function handleRemoveSavedJob() {}

    return (
        <section className="w-full min-h-screen pt-16 flex flex-col items-center">
            <div className="w-full min-h-full max-w-6xl px-4">
                <div className="min-h-full w-full py-6">
                    <h1 className="text-2xl font-bold text-(--heading)">
                        Saved Jobs
                    </h1>
                </div>
                {savedJobs ? (
                    <div className="w-full flex flex-col items-start justify-center gap-6">
                        {savedJobs.map((job) => (
                            <div
                                key={job.id}
                                className="w-full max-w-4xl p-4 border border-(--border) flex items-center justify-between gap-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="w-full">
                                        <h2 className="text-(--heading) font-semibold text-xl">
                                            {job.jobtitle}
                                        </h2>
                                        <p className="text-sm text-(--text) font-medium">
                                            {job.companyname}
                                        </p>
                                    </div>
                                    <div className="w-full flex items-center gap-2">
                                        <span className="text-sm text-(--text) font-semibold bg-(--secondary-hover) px-3 py-1 rounded-full">
                                            {job.salary}
                                        </span>
                                    </div>
                                </div>
                                <div className="relative flex items-end gap-4 self-stretch">
                                    <button className="bg-(--secondary) hover:bg-(--secondary-hover) px-3 py-1.5 rounded-lg text-sm text-(--heading) font-semibold hover:shadow-md hover:cursor-pointer transition-all duration-200 ease-in-out">
                                        View Details
                                    </button>
                                    <button className="bg-(--primary) hover:bg-(--primary-hover) text-white/95 text-sm font-semibold px-3 py-1.5 rounded-lg hover:cursor-pointer hover:shadow-md">
                                        Apply Now
                                    </button>
                                    <div
                                        onClick={handleRemoveSavedJob}
                                        className="absolute top-0 right-0 cursor-pointer"
                                    >
                                        <img
                                            src="/saved.png"
                                            alt=""
                                            className="h-5"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-(--error) text-shadow-lg">
                            No Saved Jobs
                        </h1>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SavedJobs;
