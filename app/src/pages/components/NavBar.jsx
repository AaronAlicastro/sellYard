import React from "react";
import "./styles/navBar.css";
import { ICONS, LOGOS } from "./assets/"

function NavBar(props) {
    return <nav>
        <img src={ICONS.icon_menu} alt="menu" className="menu" />
        <div className="navBar-left">
            <img src={LOGOS.logo_yard_sale} alt="logo" className="logo" />
            <ul>
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
        </div>

        <div className="navBar-right">
            <ul>
                <li className="navBar-email">
                    Example@gmail.com
                </li>
                <li className="navBar-shoppin-cart">
                    <img src={ICONS.icon_shopping_cart} alt="shopping cart" />
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
}

export default NavBar;