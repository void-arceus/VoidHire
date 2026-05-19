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
    <main className="min-h-screen w-full pt-16 flex flex-col items-center">
      {/* search bar */}
      <div className="w-full max-w-6xl px-4">
        <div className="w-full flex items-center justify-center">
          {/* job title */}
          <input
            className="flex-2 p-3 rounded-xl border border-(--border)"
            placeholder="Job Title"
          />
          {/* job location */}
          <input
            className="flex-2 p-3 rounded-xl border border-()"
            placeholder="Location"
          />
          <button className="flex-1">Search</button>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
