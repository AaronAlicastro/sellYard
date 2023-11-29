import React from "react";
import "./components/styles/login.css";
import { LOGOS } from "./components/assets";

function Login() {
    return <div className="login">
        <div className="form-container">
            <img src={LOGOS.logo_yard_sale} alt="logo" className="logo" />

            <form action="/" className="form">
                <label htmlFor="email" className="label">Email address</label>
                <input className="input" type="text" id="email" placeholder="example@gmail.com" />
                <label htmlFor="password" className="label">Password</label>
                <input className="input" type="password" id="password" placeholder="*********" />
                <input type="submit" value="Log in" className="primary-button login-button" />
                <a href="/">Forgot my password</a>
            </form>

            <button className="secondary-button signup-button">Sign up</button>
        </div>
    </div>
}

export default Login;