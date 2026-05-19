import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

export async function registerUser(data) {
  const result = await axios.post(`${BASE_URL}/auth/register`, data);
  return result;
}

export async function login(data) {
  const result = await axios.post(`${BASE_URL}/auth/login`, data);
  return result;
}

export async function getCurrentUser() {
  const result = await axios.get(`${BASE_URL}/auth/me`);
  return result;
}

export async function logoutUser() {
  const result = await axios.post(`${BASE_URL}/auth/logout`);
  return result;
}
