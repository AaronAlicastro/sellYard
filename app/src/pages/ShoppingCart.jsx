import React from "react"
import "./components/styles/shoppingCart.css";
import { ICONS } from "./components/assets";

function ShoppingCart(props) {
    let total = 0;

    return <aside className="product-detail-cart">
        <div className="myOrderContent">
            <div className="title-container" onClick={() => props.goToView("home")}>
                <img src={ICONS.flechita} alt="arrow" />
                <p className="title">My order</p>
            </div>

            {
                props.products.map((pr, i) => {
                    total += pr.price;
                    return <div className="shopping-cart" key={"product" + i}>
                        <figure>
                            <img src={pr.image} alt={pr.title} />
                        </figure>
                        <p>{pr.title}</p>
                        <p>{pr.price}</p>
                        <div className="close">
                            <img src={ICONS.icon_close} alt="close" />
                        </div>
                    </div>
                })
            }

            <h4 style={{ textAlign: "center" }}>Total: {total} </h4>
        </div>


        {
            (props.products.length) ? "" : <h4 style={{ textAlign: "center" }}>No hay productos cargados</h4>
        }
    </aside>
}

export default ShoppingCart;