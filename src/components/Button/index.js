import React from "react";
import "./style.scss";

export default function SignBtn({ label, href, bgc = "#000", onClick = () => { console.log("Click!"); } }) {
    const style = {
        backgroundColor: bgc,
    };
    return (
        <a href={href} className="SignBtn" onClick={onClick}>
            <button className="btn" style={style}>
                {label}
            </button>
        </a>
    );
}
