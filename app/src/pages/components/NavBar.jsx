import React, { useState } from "react";
import "./styles/navBar.css";
import { ICONS, LOGOS } from "./assets/";
import MenuPc from "./MenuPc";
import MenuPhone from "./MenuPhone";

function NavBar(props) {
    let [displayMenuPc, setDisplayMenuPc] = useState("none");
    let [displayMenuPhone, setDisplayMenuPhone] = useState("none");

    const listenerCloserMenu = () => {
        window.addEventListener("click", () => {
            setDisplayMenuPc("none");
            setDisplayMenuPhone("none");
        });
    }

    const changeCategory = () => {
        let li_category = document.querySelector(".categorySelected");
        if (li_category) li_category.classList.remove("categorySelected");
    };
    const setCategory = (e, category) => {
        if (document.querySelector(".categorySelected") != e.target) {
            changeCategory();
            e.target.classList.add("categorySelected");
            if (category != "all") props.categorySelected(category);
            else props.categorySelected(false);
        }
    }

    return <nav>
        <img src={ICONS.icon_menu} alt="menu" className="menu" onClick={(e) => {
            e.stopPropagation();
            setDisplayMenuPhone("block");
        }} />
        <div className="navBar-left">
            <img src={LOGOS.logo_yard_sale} alt="logo" className="navBar-left-logo" />
            <ul>
                <li>
                    <a className="categorySelected" onClick={(e) => setCategory(e, "all")}>ALL</a>
                </li>
                {
                    props.categories.map((cts, i) => {
                        return <li key={(new Date()) + i}>
                            <a onClick={(e) => setCategory(e, cts)}>
                                {cts}
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>

        <div className="navBar-right">
            <ul>
                <li className="navBar-right-account" onClick={(e) => {
                    e.stopPropagation();
                    setDisplayMenuPc("block");
                }}>
                    Cuenta
                </li>
                <li className="navBar-shoppin-cart">
                    <img
                        src={ICONS.icon_shopping_cart}
                        alt="shopping cart"
                        onClick={props.openCart}
                    />
                    <div> {props.productCountSelected} </div>
                </li>
            </ul>
        </div>

        <MenuPc
            display={displayMenuPc}
        />
        <MenuPhone
            display={displayMenuPhone}
            categories={props.categories}
            setCategory={(e, category) => setCategory(e, category)}
        />

        {listenerCloserMenu()}
    </nav>
}

export default NavBar;