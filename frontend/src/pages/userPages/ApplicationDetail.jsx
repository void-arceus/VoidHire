import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ApplicationDetail = () => {
    const location = useLocation();

    const jobDetail = location.state?.job;

    async function handleWithdrawApplication() {
        console.log("I will withdraw your application later.");
    }

    return (
        <main className="w-full mt-16 min-h-screen flex flex-col items-center justify-start px-4">
            <div className="w-full max-w-4xl p-4 flex flex-col items-center gap-4 my-10 border border-(--border) shadow-md rounded-2xl">
                {/* heading */}
                <div className="w-full flex flex-col items-start gap-1">
                    <h1 className="text-2xl font-semibold text-(--heading)">
                        {jobDetail.jobtitle}
                    </h1>
                    <p className="text-sm font-medium">
                        {jobDetail.companyname}
                    </p>

                    {/* location */}
                    <div className="w-full flex items-center justify-start gap-2 text-sm">
                        <h2 className="font-semibold">Location:</h2>
                        <p className="font-medium text-(--text)">
                            {jobDetail.location}
                        </p>
                    </div>

                    {/* experience */}
                    <div className="w-full flex items-center justify-start gap-2 text-sm">
                        <h2 className="font-semibold">Experience:</h2>
                        <p className="font-medium text-(--text)">
                            {jobDetail.experience}
                        </p>
                    </div>

                    {/* salary */}
                    <div className="w-full flex items-center justify-start gap-2 text-sm">
                        <h2 className="font-semibold">Salary:</h2>
                        <p className="font-medium text-(--text)">
                            {jobDetail.salary
                                ? jobDetail.salary
                                : "Not Mentioned"}
                        </p>
                    </div>
                </div>

                <hr className="w-full border border-(--border)" />

                {/* about company */}
                <div className="w-full flex flex-col items-start gap-1">
                    <h2 className="text-lg text-(--heading) font-semibold">
                        About Company
                    </h2>
                    <p className="text-sm text-(--text) font-medium">
                        {jobDetail.aboutcompany}
                    </p>
                </div>

                <hr className="w-full border border-(--border)" />

                {/* job description */}
                <div className="w-full flex flex-col items-start gap-1">
                    <h2 className="text-lg text-(--heading) font-semibold">
                        Job Description:
                    </h2>

                    {jobDetail.jobdescription?.length === 1 ? (
                        <p className="text-sm text-(--text) font-medium">
                            {jobDetail.jobdescription}
                        </p>
                    ) : (
                        <ul className="w-full list-disc list-inside">
                            {jobDetail.jobdescription?.map((item, key) => (
                                <li
                                    key={key}
                                    className="text-sm text-(--text) font-medium"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <hr className="w-full border border-(--border)" />

                {/* requirements */}
                <div className="w-full flex flex-col items-start gap-1">
                    <h2 className="text-lg text-(--heading) font-semibold">
                        Requirements:
                    </h2>

                    {jobDetail.requirements?.length === 1 ? (
                        <p className="text-sm text-(--text) font-medium">
                            {jobDetail.requirements}
                        </p>
                    ) : (
                        <ul className="w-full list-disc list-inside space-y-0.5">
                            {jobDetail.requirements?.map((item, key) => (
                                <li
                                    key={key}
                                    className="text-sm text-(--text) font-medium"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <hr className="w-full border border-(--border)" />

                {/* responsibilities */}
                <div className="w-full flex flex-col items-start gap-1">
                    <h2 className="text-lg text-(--heading) font-semibold">
                        Responsibilities:
                    </h2>

                    {jobDetail.responsibilities?.length === 1 ? (
                        <p className="text-sm text-(--text) font-medium">
                            {jobDetail.responsibilities}
                        </p>
                    ) : (
                        <ul className="w-full list-disc list-inside space-y-0.5">
                            {jobDetail.responsibilities?.map((item, key) => (
                                <li
                                    key={key}
                                    className="text-sm text-(--text) font-medium"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <hr className="w-full border border-(--border)" />

                {/* skills */}
                <div className="w-full flex flex-col items-start gap-1">
                    <h2 className="text-lg text-(--heading) font-semibold">
                        Skills:
                    </h2>

                    {jobDetail.jobdescription?.length === 1 ? (
                        <p className="text-sm text-(--text) font-medium">
                            {jobDetail.skills}
                        </p>
                    ) : (
                        <div className="w-full flex items-center flex-wrap gap-4">
                            {jobDetail.skills?.map((item, key) => (
                                <span
                                    key={key}
                                    className="text-sm text-(--text) font-medium px-4 py-1.5 bg-(--secondary-hover) rounded-full"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <hr className="w-full border border-(--border)" />

                {/* Perks */}
                <div className="w-full flex flex-col items-start gap-1">
                    <h2 className="text-lg text-(--heading) font-semibold">
                        Perks:
                    </h2>

                    {jobDetail.perks?.length === 1 ? (
                        <p className="text-sm text-(--text) font-medium">
                            {jobDetail.perks}
                        </p>
                    ) : (
                        <ul className="w-full list-disc list-inside space-y-0.5">
                            {jobDetail.perks?.map((item, key) => (
                                <li
                                    key={key}
                                    className="text-sm text-(--text) font-medium"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <hr className="w-full border border-(--border)" />

                {/* apply button */}
                <div className="w-full flex items-center justify-end p-2">
                    <button
                        type="button"
                        onClick={() => {
                            handleWithdrawApplication();
                        }}
                        className="px-4 py-2 text-sm text-white/95 font-medium bg-(--primary) hover:bg-(--primary-hover) rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer"
                    >
                        Withdraw Application
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ApplicationDetail;
