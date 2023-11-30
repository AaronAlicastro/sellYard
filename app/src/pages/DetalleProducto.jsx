import React, { useState } from "react";
import "./components/styles/detalleProducto.css";
import { ICONS } from "./components/assets";
import AlertMessage from "./components/AlertMessage";

function DetalleProducto(props) {
    let [showAlertMessage, setShowAlertMessage] = useState({ show: false, message: "" });

    return <div className="product-detail-container">
        <AlertMessage
            show={showAlertMessage.show}
            close={() => setShowAlertMessage(false)}
            message={showAlertMessage.message}
        />

        <aside className="product-detail">
            <div className="product-detail-close" onClick={() => props.goToView("home")}>
                <img src={ICONS.icon_close} alt="close" />
            </div>
            <img src={props.product.image} alt={props.product.title} />

            <div className="product-info">
                <p>{props.product.price}</p>
                <p>{props.product.title}</p>
                <p>{props.product.description}</p>
                <button
                    className="primary-button addToCard-button"
                    onClick={() => {
                        props.querys.addProductToCart(props.product);
                        setShowAlertMessage({
                            show: true,
                            message: "Añadido con éxito"
                        });
                    }}
                >
                    <img src={ICONS.bt_add_to_cart} alt="add to cart icon" />
                    Add to cart
                </button>
            </div>
        </aside>
    </div>
}

export default DetalleProducto;