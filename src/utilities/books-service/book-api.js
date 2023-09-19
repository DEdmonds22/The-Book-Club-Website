import { getToken } from "../users-service";
const BASE_URL = "/api/books";

async function sendRequest(url, method="GET", payload=null) {
    const options = {method};

    if (payload) {
        options.headers = {"Content-Type": "application/json"};
        options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    };

    const res = await fetch (url, options);
    if (res.ok) return res.json();

    throw new Error("Bad Request");
};

export async function addBook(bookDetails) {
    console.log(bookDetails)
    return sendRequest(`${BASE_URL}/add`, "POST", bookDetails);
};

export async  function getBookShelf(userId) {
    return sendRequest(`${BASE_URL}/${userId}`, "GET");
};