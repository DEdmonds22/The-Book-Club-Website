import { Component } from "react";

export default class SignUpForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirm: "",
        error: ""
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ""
        });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit} >
                        <label>First Name: </label>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                        <label>Last Name: </label>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
                        <label>Email: </label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>User Name: </label>
                            <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} required />
                        <label>Password: </label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm Password: </label>
                            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable} >SIGN UP</button>
                    </form>
                </div>
                <p className="error-msg">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}