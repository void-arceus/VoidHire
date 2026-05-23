// jobs.api.js
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export async function getJobs() {
    const result = await axios.get(`${BASE_URL}/jobs/alljobs`);
    return result;
}

export async function saveJob() {
    try {
        const res = axios.post(`${BASE_URL}/jobs/savejob`, { jobId });
        return res;
    } catch (err) {
        console.error(err);
        return err;
    }
}

export async function getSavedJobs() {
    try {
        const res = await axios.get(`${BASE_URL}/jobs/savedjobs`);
        return res;
    } catch (err) {
        console.error(err);
        return err;
    }
}
