import React from "react";

export default function SubmitBtn({ text, checkLogin }) {
    return (
        <button className="btn btn-info" type="submit" onClick={checkLogin}>
            {text}
        </button>
    );
}
