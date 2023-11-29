import React from "react";
import "./components/styles/cuenta.css";
import ShoppingCart from "./components/ShoppingCart";

function Cuenta() {
    return <div>
        <ShoppingCart />

        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>

                <form action="/" className="form">
                    <label htmlFor="name" className="label">Name</label>
                    <input className="input" type="text" id="name" placeholder="Name" />

                    <label htmlFor="email" className="label">Email</label>
                    <input className="input" type="email" id="email" placeholder="example@gmail.com" />

                    <label htmlFor="password" className="label">New password</label>
                    <input className="input" type="password" id="password" placeholder="*********" />
                    <input type="submit" value="Create" className="primary-button login-button" />
                </form>
            </div>
        </div>
    </div>
}

export default Cuenta;