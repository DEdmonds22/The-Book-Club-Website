import * as usersAPI from "./users-api";

export async function signUp(userData ) {
    const token = await usersAPI.signUp(userData);  // sends user data to users-api.js w/ users-api.js's signUp func
    return token; 
};