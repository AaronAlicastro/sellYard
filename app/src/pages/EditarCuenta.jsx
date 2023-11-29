import React from "react";
import "./components/styles/editarCuenta.css";

function editarCuenta() {
    return <div className="login">
        <div className="form-container">
            <h1 className="title">My account</h1>

            <form action="/" className="form">
                <div>
                    <label htmlFor="name" className="label">Name</label>
                    <p className="value">Camila</p>

                    <label htmlFor="email" className="label">Email</label>
                    <p className="value">camila@gmail.com</p>

                    <label htmlFor="password" className="label">New password</label>
                    <p className="value">*********</p>

                </div>
                <input type="submit" value="Edit" className="secondary-button login-button" />
            </form>
        </div>
    </div>
}

export default editarCuenta;