import React from "react";
import "./SignInBtn.scss";
import { BrowserRouter, Link } from "react-router-dom";

export default function SignInBtn() {
    return (
        <BrowserRouter>
            <Link to="/auth/signin">
                <a href="/auth/signin" className="SignInBtn">
                    Войти
                </a>
            </Link>
        </BrowserRouter>
    );
}
