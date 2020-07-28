import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import logoPath from "./../../img/cyberIzbushkaBlue.png";
import DropdownBtn from "./../buttons/DropdownBtn";
import SignBtn from "../buttons/SignBtn";

import { Context } from "../../context";

import "./Header.scss";

const Greetings = ({ name }) => {
<<<<<<< HEAD
    let time = new Date();
=======
    let time = new Date()
    setInterval(() => { time = new Date() }, 3600)

>>>>>>> newStructure
    let hours = time.getHours();
    let ans = '';

    if (hours > 0 && hours < 6) {
<<<<<<< HEAD
        return <span>Доброй ночи {name}</span>;
    } else if (hours > 6 && hours < 12) {
        return <span>Доброе утро {name}</span>;
    } else if (hours > 12 && hours < 18) {
        return <span>Добрый день {name}</span>;
    } else if (hours > 18 && hours < 24) {
        return <span>Добрый вечер {name}</span>;
    }
};
=======
        ans = `Доброй ночи ${name}`
    } else if (hours > 6 && hours < 12) {
        ans = `Доброе утро ${name}`
    } else if (hours > 12 && hours < 18) {
        ans = `Добрый день ${name}`
    } else if (hours > 18 && hours < 24) {
        ans = `Добрый вечер ${name}`
    }

    return <div style={{ color: '#555' }}>{ans}</div>

}
>>>>>>> newStructure

export default function Header() {
    const { user } = useContext(Context);

    // const usetLogin = onUserLogin();

<<<<<<< HEAD
    const SignButtons = () => {
        // if (user.ok) {
        return (
=======
    return (
        <div className="header">
            <div className="header_left-part">
                <Logo className="logo" path={logoPath} />
                <DropdownBtn className="btn header__btn" />
            </div>

>>>>>>> newStructure
            <div className="header_right-part">
                <Greetings name={"Artem"} />
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
        // }
    };

    return (
        <div className="header">
            <div className="header_left-part">
                <Logo className="logo" path={logoPath} />
                <DropdownBtn className="btn header__btn" />
            </div>
            <SignButtons />
            <Greetings name={"Artem"} />
        </div>
    );
}
