import React, { useState } from "react";
import "./components/styles/home.css";
import { ICONS } from "./components/assets";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import AlertMessage from "./components/AlertMessage";

function Home(props) {
    // general
    const set_setProductsToView = (products) => setTimeout(() => setProductsToView(products), 888);
    let [productsToView, setProductsToView] = useState([]), key = 0;
    let [categories, setCategories] = useState([]);
    let [showAlertMessage, setShowAlertMessage] = useState({ show: false, message: "" });

    // products function
    if (!productsToView.length) props.querys.getAllProducts(set_setProductsToView);
    if (!categories.length) props.querys.getAllCategories((categories) => setCategories(categories));

    const showProductDetails = (product) => props.goToView("detalleProducto", { product })

    return <div>
        <NavBar
            categories={categories}
            categorySelected={(category) => {
                if (category) {
                    setProductsToView([]);
                    props.querys.getOneCategory(category, set_setProductsToView);
                } else props.querys.getAllProducts(set_setProductsToView);
            }}
            productCountSelected={props.querys.cartProductsAdded.length}
            openCart={() => props.goToView("shoppingCart")}
        />

        <AlertMessage
            show={showAlertMessage.show}
            close={() => setShowAlertMessage({ show: false })}
            message={showAlertMessage.message}
        />

        <section className="main-container">
            <div className="cards-container">
                {
                    (productsToView.length) ? productsToView.map(pr => {
                        key++;
                        return <div className="product-card" key={key}>
                            <figure
                                className="icon-add-to-cart"
                                onClick={() => {
                                    props.querys.addProductToCart(pr);
                                    setShowAlertMessage({
                                        show: true,
                                        message: "Agregado con éxito"
                                    });
                                }}
                            >
                                <img src={ICONS.bt_add_to_cart} alt="cart icon" />
                            </figure>
                            <img
                                src={pr.image}
                                alt={pr.title}
                                onClick={() => showProductDetails(pr)}
                            />

                            <div className="product-info">
                                <div>
                                    <p onClick={() => showProductDetails(pr)}>{pr.price}</p>
                                    <p>{pr.title}</p>
                                </div>
                            </div>
                        </div>
                    }) :
                        <Loading />
                }
            </div>
        </section>
    </div>
}

export default Home;