// jobs.api.js
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export async function getJobs() {
  const result = await axios.get(`${BASE_URL}/jobs/alljobs`);
  return result;
}
