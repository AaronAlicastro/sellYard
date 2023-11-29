import React from "react";
import "./styles/detalleProducto.css";
import { ICONS } from "./assets";

function DetalleProducto() {
    return <aside className="product-detail">
        <div className="product-detail-close">
            <img src={ICONS.icon_close} alt="close" />
        </div>
        <img src="https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875__340.jpg" alt="strawberry" />

            <div className="product-info">
                <p>135,00</p>
                <p>strawberry</p>
                <p>with this strawberry you can make a pie delicious</p>
                <button className="primary-button addToCard-button">
                    <img src={ICONS.bt_add_to_cart} alt="add to cart" />
                        Add to cart
                </button>
            </div>
    </aside>
}

export default DetalleProducto;