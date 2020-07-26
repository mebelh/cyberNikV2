import React from "react";
import Logo from "../Logo/Logo";
import logoPath from "./../../img/cyberIzbushkaBlue.png";
import DropdownBtn from "./../buttons/DropdownBtn";
import SignBtn from "../buttons/SignBtn";

import "./Header.scss";
export default function Header() {
    return (
        <div className="header">
            <div className="header_left-part">
                <Logo className="logo" path={logoPath} />
                <DropdownBtn className="btn header__btn" />
            </div>
            <div className="header_right-part">
                <SignBtn
                    label="Войти"
                    href="/auth/signin"
                    bgc="rgb(26, 142, 250)"
                />
                <SignBtn
                    label="Регистрация"
                    href="/auth/signup"
                    bgc="rgb(24, 107, 185)"
                />
            </div>
        </div>
    );
}
