import React from "react";

export default function SubmitBtn({ text, checkLogin }) {
    return (
        <button
            className="btn btn-info"
            type="submit"
            onClick={(e) => {
                checkLogin(e);
                // console.log(e.target);
            }}
        >
            {text}
        </button>
    );
}
