// jobs.api.js
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export async function getJobs(id) {
    try {
        let result;
        if (id) {
            result = await axios.get(`${BASE_URL}/jobs/alljobs?jobid=${id}`);
        } else {
            result = await axios.get(`${BASE_URL}/jobs/alljobs`);
        }
        return result;
    } catch (err) {
        console.error(err);
        return err;
    }
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

export async function postJob(jobdata) {
    try {
        const res = await axios.post(`${BASE_URL}/jobs/postjob`, {
            jobdata: jobdata,
        });
        return res;
    } catch (err) {
        console.error(err);
        return err;
    }
}
