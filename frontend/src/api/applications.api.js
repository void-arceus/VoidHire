// applications.api.js

import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

export async function getUserApplications(userid) {
    try {
        const result = await axios.get(
            `${BASE_URL}/applications/myapplications`,
        );
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function apply(jobid) {
    try {
        const result = await axios.post(`${BASE_URL}/applications/apply`, {
            applicationData: { jobid },
        });
        return result;
    } catch (err) {
        return err;
    }
}
