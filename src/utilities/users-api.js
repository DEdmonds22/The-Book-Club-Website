const Base_URL = "/api/users";

export async function signUp(userData) {
    const res = await fetch(Base_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)  // fetch requires data payloads to be stringified and assigned to a body property on the options object
    });

    if (res.ok) {
        return res.status(200).json();
    } else {
        throw new Error("Invalid Sign Up");
    };
};