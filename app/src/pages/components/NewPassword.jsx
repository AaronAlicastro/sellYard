import React from "react";
import "./styles/newPassword.css";
import { LOGOS } from "./assets";

function NewPassword() {
    return <div className="login">
        <div className="form-container">
            <img src={LOGOS.logo_yard_sale} alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="/" className="form">
                <label htmlFor="password" className="label">Password</label>
                <input className="input" type="password" id="password" placeholder="*********" />
                <label htmlFor="new-password" className="label">New password</label>
                <input className="input" type="password" id="new-password" placeholder="*********" />
                <input type="submit" value="Confirm" className="primary-button login-button" />
            </form>
        </div>
    </div>
}

export default NewPassword;