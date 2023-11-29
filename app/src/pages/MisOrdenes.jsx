import React from "react";
import "./components/styles/misOrdenes.css";
import { ICONS } from "./components/assets";

function MisOrdenes() {
    return <div className="myOrder">
        <div className="myOrderContainer">
            <h1 className="title">My orders</h1>

            <div className="myOrderContent">
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560,00</p>
                    <img src={ICONS.flechita} alt="arrow" />
                </div>
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560,00</p>
                    <img src={ICONS.flechita} alt="arrow" />
                </div>
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560,00</p>
                    <img src={ICONS.flechita} alt="arrow" />
                </div>
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560,00</p>
                    <img src={ICONS.flechita} alt="arrow" />
                </div>
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560,00</p>
                    <img src={ICONS.flechita} alt="arrow" />
                </div>
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560,00</p>
                    <img src={ICONS.flechita} alt="arrow" />
                </div>
            </div>
        </div>
    </div>
}

export default MisOrdenes;