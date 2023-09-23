import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersService from "../../utilities/users-service/users-service";
import styles from "../LoginForm/LoginForm.css"

export default function LoginForm({ setUser }) {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = evt => {
        setCredentials({...credentials, [evt.target.name]: evt.target.value});
        setError("")
    };
    
    const handleSubmit = async evt => {
        evt.preventDefault();

        try {
            const user = await usersService.login(credentials);
            setUser(user);
            navigate("/")
        } catch {
            setError("Log In Failed - Try Again");
        };
    };

    return (
        <div className="loginForm-cont">
            <div className="form-container" >
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    < br />
                    <label>Password:</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    < br />
                    < br />
                    <button type="submit">LOG IN</button>
                </form>
                < br />
                <p className="error-message" >&nbsp;{error}</p>
            </div>
        </div>
    )
}