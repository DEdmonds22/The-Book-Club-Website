import * as usersAPI from "./users-api";

export function getToken() {
    const token = localStorage.getItem('token');
    console.log(token)
    if (!token) return null;  // if no token found in user's local storage, return setUser(null);

    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp < Date.now()/1000) {  //if token has expired, it is removed, also returns setUser(null);
        localStorage.removeItem("token");
        return null;
    }
    
    return token;  // otherwise, return the token
}

export function getUser() {
    const token = getToken();  // func on line 3
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;  // returns user
};

export async function signUp(userData ) {
    const token = await usersAPI.signUp(userData);  // sends user data to users-api.js w/ users-api.js's signUp func
    localStorage.setItem('token', token);  // saves said token to user's local storage
    return getUser();  // func on line 16
};