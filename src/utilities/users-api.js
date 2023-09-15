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

    const res = await fetch (url, options); // sends req to server.js w/ '/api/users/'

    if (res.ok) return res.json();

    throw new Error("Bad Request");
};

export async function signUp(userData) {
    return sendRequest (Base_URL, "POST", userData);
/*    const res = await fetch(Base_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)  // fetch requires data payloads to be stringified and assigned to a body property on the options object
    });

    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Invalid Sign Up");
    };
*/
};