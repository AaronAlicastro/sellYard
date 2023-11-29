import React from "react"
import "./styles/shoppingCart.css";
import { ICONS } from "./assets/";

function ShoppingCart() {
    return <aside className="product-detail">
        <div className="myOrderContent">
            <div className="title-container">
                <img src={ICONS.flechita} alt="arrow" />
                <p className="title">My order</p>
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875__340.jpg" alt="strawberry" />
                </figure>
                <p>strawberry</p>
                <p>130,00</p>
                <div className="close">
                    <img src={ICONS.icon_close} alt="close" />
                </div>
            </div>
            <div className="shopping-cart">
                <figure>
                    <img src="https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875__340.jpg" alt="strawberry" />
                </figure>
                <p>strawberry</p>
                <p>130,00</p>
                <div className="close">
                    <img src={ICONS.icon_close} alt="close" />
                </div>
            </div>
            <div className="shopping-cart">
                <figure>
                    <img src="https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875__340.jpg" alt="strawberry" />
                </figure>
                <p>strawberry</p>
                <p>130,00</p>
                <div className="close">
                    <img src={ICONS.icon_close} alt="close" />
                </div>
            </div>
            <div className="shopping-cart">
                <figure>
                    <img src="https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875__340.jpg" alt="strawberry" />
                </figure>
                <p>strawberry</p>
                <p>130,00</p>
                <div className="close">
                    <img src={ICONS.icon_close} alt="close" />
                </div>
            </div>
        </div>
    </aside>
}

export default ShoppingCart;