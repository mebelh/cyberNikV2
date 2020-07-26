import React from "react";
import Logo from "../Logo/Logo";
import logoPath from "./../../img/cyberIzbushkaBlue.png";
import DropdownBtn from "./../buttons/DropdownBtn";
import SignInBtn from './../buttons/SignInBtn/SignInBtn'
import SignUpBtn from './../buttons/SignUpBtn/SignUpBtn'

import "./Header.scss";
export default function Header() {
    return (
        <div className="header">
            <div className="header_left-part">
                <Logo className="logo" path={logoPath} />
                <DropdownBtn className="btn header__btn" />
            </div>
            <div className="header_right-part">
                <SignInBtn />
                <SignUpBtn />
            </div>
        </div>
    );
}
