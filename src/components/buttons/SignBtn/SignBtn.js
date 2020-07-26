import React from "react";
import "./SignBtn.scss";

export default function SignBtn({ label, href, bgc = "#000" }) {
    const style = {
        backgroundColor: bgc,
    };
    return (
        <a href={href} className="SignBtn">
            <button className="btn" style={style}>
                {label}
            </button>
        </a>
    );
}
