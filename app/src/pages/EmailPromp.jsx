import React from "react";
import "./components/styles/emailPromp.css";
import { ICONS } from "./components/assets";

function Email(props) {
    return <div className="login">
        <div className="form-container">
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Please check your onbox for instructions on how to reset the password</p>

            <div className="email-image">
                <img src={ICONS.email} alt="emal" />
            </div>
            <button className="primary-button login-button" onClick={() => {
                props.goToView("login");
            }}>Login</button>
            <p className="resend">
                <span>Didn't rececive the email? </span>
                <a href="/">Resend</a>
            </p>
        </div>
    </div>
}

export default Email;