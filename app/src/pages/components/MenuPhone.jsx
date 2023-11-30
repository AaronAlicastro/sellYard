import React from "react";
import "./styles/menuPhone.css";

function MenuPhone(props) {
    return <div
        className="mobile-menu"
        style={{ display: props.display }}
        onClick={e => e.stopPropagation()}
    >
        <div>
            <ul>
                <li>
                    <a>CATEGORIES</a>
                </li>
                <li>
                    <a onClick={e => props.setCategory(e, "all")}>ALL</a>
                </li>
                {
                    props.categories.map((cts, i) => {
                        return <li key={i + "categories"} onClick={e => props.setCategory(e, cts)}>
                            <a>{cts}</a>
                        </li>
                    })
                }
            </ul>

            <ul>
                <li>
                    <a>My orders</a>
                </li>
                <li>
                    <a>My account</a>
                </li>
            </ul>
        </div>

        <ul>
            <li>
                <a href="/" className="signOut">Sign out</a>
            </li>
        </ul>
    </div>
}

export default MenuPhone;