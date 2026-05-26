import { useState } from "react";

const CreateJobForm = () => {
    const [skillsInput, setSkillsInput] = useState([
        "c++",
        "java",
        "javascript",
        "RestAPIs",
    ]);

    return (
        <main className="pt-16 min-h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-6xl min-h-screen px-4 flex flex-col items-center justify-start">
                <form className="mt-15 border border-(--border) w-full max-w-3xl shadow-sm flex flex-col items-center justify-center gap-8 p-4 rounded-2xl">
                    <div className="w-full flex items-center justify-center">
                        <h1 className="text-2xl font-bold">Post a Job</h1>
                    </div>
                    <div className="w-full flex flex-col items-start gap-2 sm:flex-row">
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="companyName"
                                className="text-sm text-(--text)"
                            >
                                Company Name:
                            </label>
                            <input
                                id="companyName"
                                name="companyname"
                                placeholder="company name"
                                className="border border-(--border) w-full p-3 text-md rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="jobTitle"
                                className="text-sm text-(--text)"
                            >
                                Job Title:
                            </label>
                            <input
                                id="jobTitle"
                                name="jobtitle"
                                placeholder="Job Title"
                                className="border border-(--border) w-full p-3 text-md rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* location and salary */}
                    <div className="w-full flex flex-col items-start gap-2 sm:flex-row">
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="jobLocation"
                                className="text-sm text-(--text)"
                            >
                                Job Location
                            </label>
                            <input
                                id="jobLocation"
                                name="location"
                                placeholder="Job Location"
                                className="border border-(--border) w-full p-3 text-md rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="salary"
                                className="text-sm text-(--text)"
                            >
                                Salary:
                            </label>
                            <input
                                id="salary"
                                name="salary"
                                placeholder="Salary"
                                className="border border-(--border) w-full p-3 text-md rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* about company */}
                    <div className="w-full flex flex-col items-start gap-2">
                        <label
                            htmlFor="about"
                            className="text-sm text-(--text)"
                        >
                            About Company:
                        </label>
                        <textarea
                            name="about"
                            placeholder="About company"
                            className="w-full h-30 border border-(--border) rounded-xl p-3 text-md text-(--heading) outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out resize-none shadow-sm"
                        />
                    </div>

                    {/* skills input */}
                    <div className="w-full">
                        <div className="w-full flex flex-col items-start gap-2">
                            <div className="w-full">
                                <label htmlFor="skills">Skills Required:</label>
                                {skillsInput.length > 0 ? (
                                    <div className="w-full flex flex-wrap items-center gap-3">
                                        {skillsInput.map((skill) => (
                                            <span className="text-md font-semibold bg-(--secondary-hover) px-4 py-1.5 rounded-full text-(--text)">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                                <input
                                    placeholder="Enter eywords"
                                    className=""
                                />
                            </div>
                            <button>Add</button>
                        </div>
                    </div>

                    {/* form footer */}
                    <div className="w-full flex items-center justify-end gap-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-(--secondary-hover) hover:bg-(--secondary) rounded-lg text-sm font-semibold cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-(--primary) hover:bg-(--primary-hover) hover:cursor-pointer text-white/95 text-sm font-semibold  rounded-lg transition-all duration-200 ease-in-out"
                        >
                            Post Job
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CreateJobForm;
