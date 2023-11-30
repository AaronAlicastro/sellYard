import React from "react";
import "./styles/alertMessage.css";

function AlertMessage({ show, close, message }) {
    const showMessage = () => {
        if (show) {
            setTimeout(close, 1500);
            return <div className="alertMessage">{message}</div>;
        }
        return ""
    }

    return showMessage();
}

export default AlertMessage;