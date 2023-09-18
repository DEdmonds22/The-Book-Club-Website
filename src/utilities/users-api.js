import { getToken } from "./users-service";
const Base_URL = "/api/users";

async function sendRequest(url, method="GET", payload=null) {
    const options = {method};

    if (payload) {
        options.headers = {"Content-Type": "application/json"};
        options.body = JSON.stringify(payload);
    };

    const token = getToken();
    if (token) {
        options.headers = options.headers || {};
        options.header.Authorization = `Bearer ${token}`;
    };

    const res = await fetch (url, options);
    if (res.ok) return res.json();
    
    throw new Error("Bad Request");
};

export async function login(credentials) {
    return sendRequest(`${Base_URL}/login`, "POST", credentials);
};

export async function signUp(userData) {
    return sendRequest (Base_URL, "POST", userData);
};

export function checkToken() {
    return sendRequest(`${Base_URL}/checkToken`);
}