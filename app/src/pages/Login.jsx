import React from "react";
import "./components/styles/login.css";

function Login(props) {
    return <div className="login">
        <div className="form-container">
            <h2>Log in</h2>
            <form action="/" className="form">
                <label htmlFor="email" className="label">Email</label>
                <input className="input" type="text" id="email" placeholder="example@gmail.com" />
                <label htmlFor="password" className="label">password</label>
                <input className="input" type="password" id="password" placeholder="*********" />
                <button
                    type="submit"
                    className="primary-button login-button"
                    onClick={e => {
                        e.preventDefault();
                        props.goToView("home");
                    }}
                >
                    Log in
                </button>
                <a onClick={() => {
                    props.goToView("emailPropm");
                }}>Forgot my password</a>
            </form>
            <button className="secondary-button signup-button" onClick={() => {
                props.goToView("signIn");
            }}>Sign in</button>
        </div>
    </div>
}

export default Login;