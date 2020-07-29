import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import logoPath from "./../../img/cyberIzbushkaBlue.png";
import DropdownBtn from "./../buttons/DropdownBtn";
import SignBtn from "../buttons/SignBtn";

import { Context } from "../../context";

import "./Header.scss";

const Greetings = ({ name }) => {
    let time = new Date();
    let hours = time.getHours();

    if (hours > 0 && hours < 6) {
        return <span>Доброй ночи {name}</span>;
    } else if ((hours) => 6 && hours < 12) {
        return <span>Доброе утро {name}</span>;
    } else if ((hours) => 12 && hours < 18) {
        return <span>Добрый день {name}</span>;
    } else if ((hours) => 18 && hours <= 24) {
        return <span>Добрый вечер {name}</span>;
    }
};

export default function Header() {
    const { user } = useContext(Context);

    // const usetLogin = onUserLogin();

    const SignButtons = () => {
        if (!user.ok) {
            return (
                <div className="header_right-part">
                    <SignBtn
                        label="Войти"
                        href="/auth/login"
                        bgc="rgb(26, 142, 250)"
                    />
                    <SignBtn
                        label="Регистрация"
                        href="/auth/register"
                        bgc="rgb(24, 107, 185)"
                    />
                </div>
            );
        } else

            return (
                <div className="header">
                    <div className="header_left-part">
                        <Logo className="logo" path={logoPath} />
                        <DropdownBtn className="btn header__btn" />
                    </div>
                    <SignButtons />
                    <Greetings name={user.name || user.login} />
                </div>
            );
    };
}
// return (
//     <div className="header">
//         <div className="header_left-part">
//             <Logo className="logo" path={logoPath} />
//             <DropdownBtn className="btn header__btn" />
//         </div>
//         <SignButtons />
//         <Greetings name={"Artem"} />
//     </div>
// );