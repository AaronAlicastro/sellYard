import React from "react";
import "./styles/menuPhone.css";

function MenuPhone() {
    return <div className="mobile-menu">
        <div>
            <ul>
                <li>
                    <a href="/">CATEGORIES</a>
                </li>
                <li>
                    <a href="/">ALL</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Fornitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Other</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">ALL</a>
                </li>
            </ul>
        </div>
        <ul>
            <li>
                <a href="/" className="email">Example@gmail.com</a>
            </li>
            <li>
                <a href="/" className="signOut">Sign out</a>
            </li>
        </ul>
    </div>
}

export default MenuPhone;