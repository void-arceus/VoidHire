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
