import { useState } from "react";
import { postJob } from "../../api/jobs.api";
import { data } from "react-router-dom";

const CreateJobForm = () => {
    const [skillArr, setSkillArr] = useState([]);
    const [perkArr, setPerkArr] = useState([]);
    const [skillValue, setSkillValue] = useState("");
    const [perkValue, setPerkValue] = useState("");

    async function handleFormSubmit(e) {
        try {
            e.preventDefault();
            const formData = new FormData(e.target);
            const dataObj = Object.fromEntries(formData.entries());
            dataObj.skills = skillArr;

            // convert textarea inputs into array of strings
            dataObj.requirements = dataObj.requirements.split("\n");
            dataObj.perks = dataObj.perks.split("\n");
            dataObj.responsibilities = dataObj.responsibilities.split("\n");
            dataObj.jobdescription = dataObj.jobdescription.split("\n");

            console.log("Form Data: ", dataObj);

            const result = await postJob(dataObj);
            if (result.status === 201) {
                console.log("Job posted successfully!");
            } else {
                console.log("Something went wrong!");
            }
        } catch (err) {
            console.error(err);
            return;
        }
    }

    return (
        <main className="pt-16 min-h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-6xl min-h-screen px-4 flex flex-col items-center justify-start">
                <form
                    onSubmit={handleFormSubmit}
                    className="my-8 border border-(--border) w-full max-w-3xl shadow-sm flex flex-col items-center justify-center gap-8 p-4 rounded-2xl"
                >
                    <div className="w-full flex items-center justify-center">
                        <h1 className="text-2xl font-bold">Post a Job</h1>
                    </div>
                    <div className="w-full flex flex-col items-start gap-2 sm:flex-row">
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="companyName"
                                className="text-sm text-(--text) font-medium"
                            >
                                Company Name:
                            </label>
                            <input
                                id="companyName"
                                name="companyname"
                                placeholder="company name"
                                className="border border-(--border) w-full p-3 text-sm rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="jobTitle"
                                className="text-sm text-(--text) font-medium"
                            >
                                Job Title:
                            </label>
                            <input
                                id="jobTitle"
                                name="jobtitle"
                                placeholder="Job Title"
                                className="border border-(--border) w-full p-3 text-sm rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* location and salary */}
                    <div className="w-full flex flex-col items-start gap-2 sm:flex-row">
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="jobLocation"
                                className="text-sm text-(--text) font-medium"
                            >
                                Job Location
                            </label>
                            <input
                                id="jobLocation"
                                name="location"
                                placeholder="Job Location"
                                className="border border-(--border) w-full p-3 text-sm rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <label
                                htmlFor="salary"
                                className="text-sm text-(--text) font-medium"
                            >
                                Salary:
                            </label>
                            <input
                                id="salary"
                                name="salary"
                                placeholder="Salary-Range"
                                className="border border-(--border) w-full p-3 text-sm rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* experience and job status */}
                    <div className="w-full flex items-center gap-3">
                        <div className="w-full flex-1 flex flex-col items-start gap-2">
                            <label
                                htmlFor="exp"
                                className="text-sm text-(--text) font-medium"
                            >
                                Experience:
                            </label>
                            <input
                                id="exp"
                                name="experience"
                                placeholder="Experience Required"
                                className="w-full p-3 border border-(--border) text-sm outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm rounded-xl"
                            />
                        </div>
                        <div className="w-full flex-1 flex items-center gap-4">
                            <label
                                htmlFor="status"
                                className="text-sm text-(--text) font-medium"
                            >
                                Job Status:
                            </label>
                            <select
                                id="status"
                                name="jobstatus"
                                className="text-sm border border-(--border) outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out cursor-pointer px-4 py-2 rounded-lg shadow-sm"
                            >
                                <option value="active">Active</option>
                                <option value="closed">Close</option>
                            </select>
                        </div>
                    </div>

                    {/* about company */}
                    <div className="w-full flex flex-col items-start gap-2">
                        <label
                            htmlFor="about"
                            className="text-sm text-(--text) font-medium"
                        >
                            About Company:
                        </label>
                        <textarea
                            name="aboutcompany"
                            placeholder="About company"
                            className="w-full h-30 border border-(--border) rounded-xl p-3 text-sm text-(--heading) outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out resize-none shadow-sm"
                        />
                    </div>

                    {/* job description */}
                    <div className="w-full flex flex-col items-start gap-2">
                        <label
                            htmlFor="jd"
                            className="text-sm text-(--text) font-medium"
                        >
                            Job Description:
                        </label>
                        <textarea
                            id="jd"
                            name="jobdescription"
                            placeholder="Job Description"
                            className="w-full h-30 p-3 rounded-xl shadow-sm text-sm text-(--heading) border border-(--border) outline-0 focus:ring-2 focus:ring-(--primary) resize-none transition-all duration-200 ease-in-out"
                            required
                        />
                    </div>

                    {/* skills input */}
                    <div className="w-full">
                        <div className="w-full flex flex-col items-start gap-4">
                            <div className="w-full flex flex-col items-start gap-4">
                                <label
                                    htmlFor="skills"
                                    className="text-sm text-(--text) font-medium"
                                >
                                    Skills Required:
                                </label>
                                {skillArr.length > 0 ? (
                                    <div className="w-full flex flex-wrap items-center gap-3">
                                        {skillArr.map((skill, key) => (
                                            <div
                                                key={key}
                                                className="flex items-center gap-4 text-sm font-semibold bg-(--secondary-hover) px-4 py-1 rounded-full text-(--text)"
                                            >
                                                <p className="text-sm">
                                                    {skill}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        // remove skill from skills array
                                                        const newArr =
                                                            skillArr.filter(
                                                                (el) =>
                                                                    el !==
                                                                    skill,
                                                            );
                                                        setSkillArr(newArr);
                                                    }}
                                                    className="text-lg cursor-pointer"
                                                >
                                                    x
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                                <input
                                    placeholder="Enter keywords"
                                    onChange={(e) => {
                                        setSkillValue(e.target.value);
                                    }}
                                    value={skillValue}
                                    className="w-full border border-(--border) p-3 rounded-xl placeholder:text-sm text-sm outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out shadow-sm"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    // add skill to the skill array
                                    if (
                                        skillValue === "" ||
                                        skillValue.trim() === ""
                                    ) {
                                        alert("Cannot add empty skill");
                                        return;
                                    }
                                    setSkillArr([
                                        ...skillArr,
                                        skillValue.trim(),
                                    ]);
                                    setSkillValue("");
                                }}
                                className="px-3.5 py-1.5 bg-(--primary) hover:bg-(--primary-hover) text-white/95 rounded-lg hover:cursor-pointer transition-all duration-200 ease-in-out text-sm font-semibold"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    {/* requirements */}
                    <div className="w-full flex flex-col items-start gap-2">
                        <label
                            htmlFor="req"
                            className="text-sm text-(--text) font-medium"
                        >
                            Requirements
                        </label>
                        <textarea
                            id="req"
                            name="requirements"
                            placeholder="Job Requirements"
                            className="w-full h-30 resize-none border border-(--border) outline-0 p-3 text-sm text-(--heading) rounded-xl shadow-sm focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out"
                        />
                    </div>

                    {/* responsibilities */}
                    <div className="w-full flex flex-col items-start gap-2">
                        <label
                            htmlFor="responsibilities"
                            className="text-sm text-(--text) font-medium"
                        >
                            Responsibilities:
                        </label>
                        <textarea
                            id="responsibilities"
                            name="responsibilities"
                            placeholder="Responsibilites"
                            className="w-full h-30 resize-none border border-(--border) shadow-sm p-3 rounded-xl outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out text-sm"
                        />
                    </div>

                    {/* perks input */}
                    <div className="w-full flex flex-col items-start gap-2">
                        <label
                            htmlFor="perksInput"
                            className="text-sm text-(--text) font-medium"
                        >
                            Perks:
                        </label>
                        <textarea
                            id="perksInput"
                            name="perks"
                            onChange={(e) => {
                                setPerkValue(e.target.value);
                            }}
                            value={perkValue}
                            placeholder="Enter Job Perks"
                            className="border border-(--border) resize-none w-full h-30 p-3 rounded-xl text-sm text-(--heading) shadow-sm outline-0 focus:ring-2 focus:ring-(--primary) transition-all duration-200 ease-in-out"
                        />
                    </div>

                    {/*  */}

                    {/* form footer */}
                    <div className="w-full flex items-center justify-end gap-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-(--secondary-hover) hover:bg-(--secondary) rounded-lg text-sm font-semibold cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
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
