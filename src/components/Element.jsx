import React from 'react';
import "./../css/Element.css";

const Element = ({ status, children }) => {

    const bgColor = {
        "en cours": "orange",
        vide: "#009879",
        plein: "red",
        0: "#009879",
    };

    return <span className="element" style={{ backgroundColor: bgColor[status] ? bgColor[status] : "red" }}>
        {children}
    </span>
}

export default Element;