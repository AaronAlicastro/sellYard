import React from "react";
import "./components/styles/login.css";

function LogOut(props) {
    return <div className="login">
        <div className="form-container">
            <h2>Sign in</h2>
            <form action="/" className="form">
                <label htmlFor="email" className="label">Email</label>
                <input className="input" type="text" name="email" placeholder="example@gmail.com" />

                <label htmlFor="password" className="label">Password</label>
                <input className="input" type="password" name="password" placeholder="*********" />

                <label htmlFor="password" className="label">Confirm password</label>
                <input className="input" type="password" name="password2" placeholder="*********" />
                
                <button
                    type="submit"
                    className="primary-button login-button"
                    onClick={e => {
                        e.preventDefault();
                        props.goToView("home");
                    }}
                >
                    Sign in
                </button>
                <a onClick={() => {
                    props.goToView("login");
                }}>I've already an account</a>
            </form>
        </div>
    </div>
}

export default LogOut;