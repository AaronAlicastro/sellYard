import React from "react";
import "./styles/email.css";
import { ICONS, LOGOS } from "./assets";

function Email() {
    return <div className="login">
        <div className="form-container">
            <img src={LOGOS.logo_yard_sale} alt="logo" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your onbox for instructions on how to reset the password</p>

                <div className="email-image">
                    <img src={ICONS.email} alt="emal" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    <span>Didn't rececive the email?</span>
                    <a href="/">Resend</a>
                </p>
        </div>
    </div>
}

export default Email;