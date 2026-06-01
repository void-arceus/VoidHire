import { getUserApplications } from "../../api/applications.api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Animations/Loading";

const UserApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        handleGetUserApplications();
    }, []);

    async function handleGetUserApplications() {
        try {
            setLoading(true);
            const result = await getUserApplications();
            setApplications(result.data.data);
        } catch (err) {
            setLoading(false);
            console.error(err);
            return;
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="w-full min-h-screen pt-16 flex flex-col items-center justify-start">
            <div className="w-full max-w-6xl px-4">
                {loading ? (
                    <div className="w-full min-h-screen flex items-center justify-center">
                        <Loading />
                    </div>
                ) : (
                    <>
                        {applications.length > 0 ? (
                            <section className="w-full flex flex-col items-center gap-4">
                                <header className="mt-5">
                                    <h1 className="text-xl text-(--heading) font-semibold">
                                        Your Applications
                                    </h1>
                                </header>
                                {/* display the application details */}
                                <div className="w-full max-w-3xl flex flex-col items-start gap-4">
                                    {applications.map((data) => (
                                        <div
                                            key={data.id}
                                            className="h-40 w-full max-w-3xl flex items-center justify-between gap-1 border border-(--border) p-4 rounded-2xl shadow-md"
                                        >
                                            <div className="flex-2 flex flex-col gap-2">
                                                <div className="flex flex-col items-start gap-0.5">
                                                    <h2 className="text-xl text-(--heading) font-semibold">
                                                        {data.jobtitle}
                                                    </h2>
                                                    <p className="text-sm text-(--text) font-medium">
                                                        {data.companyname}
                                                    </p>
                                                </div>
                                                <p className="h-full text-sm text-(--text) font-medium line-clamp-2">
                                                    {data.jobdescription}
                                                </p>
                                            </div>

                                            <div className="flex-1 h-full flex items-end justify-end gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        navigate(
                                                            "/applicationDetail",
                                                            {
                                                                state: {
                                                                    job: data,
                                                                },
                                                            },
                                                        );
                                                    }}
                                                    className="px-2.5 py-1.5 bg-(--secondary) hover:bg-(--secondary-hover) text-sm text-(--heading) font-medium hover:cursor-pointer rounded-lg transition-all duration-200 ease-in-out"
                                                >
                                                    View Details
                                                </button>
                                                <button
                                                    type="button"
                                                    className="px-2.5 py-1.5 bg-(--primary) hover:bg-(--primary-hover) rounded-lg text-white/95 text-sm font-medium hover:cursor-pointer transition-all duration-200 ease-in-out"
                                                >
                                                    Withdraw
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : (
                            <div className="w-full flex items-center justify-center">
                                <h1 className="text-2xl text-(--error) font-semibold text-shadow-lg">
                                    No Applications Found
                                </h1>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default UserApplications;
