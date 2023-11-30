import React from "react";
import "./styles/menuPc.css";

function MenuPc({ display }) {
    return <div
        className="desktop-menu"
        style={{ display }}
        onClick={e => e.stopPropagation()}
    >
        <ul>
            <li>
                <a className="title">My orders</a>
            </li>
            <li>
                <a>My account</a>
            </li>
            <li>
                <a href="/">Sign out</a>
            </li>
        </ul>
    </div>
}

export default MenuPc;