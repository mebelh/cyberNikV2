import React, { useContext } from 'react'
import { Context } from "../../context";
import "./style.scss";

import Logo from "../Logo";
import logoPath from "./../../img/cyberIzbushkaBlue.png";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Button from "../Button";


const DropdownBtn = () => {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Изучить">
                <Dropdown.Item href="/lectures">Лекции</Dropdown.Item>
                <Dropdown.Item href="/library">Библиотека</Dropdown.Item>
                <Dropdown.Item href="/films">Учебные фильмы</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

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
                    <Button
                        label="Войти"
                        href="/auth/login"
                        bgc="rgb(26, 142, 250)"
                    />
                    <Button
                        label="Регистрация"
                        href="/auth/register"
                        bgc="rgb(24, 107, 185)"
                    />
                </div>
            );
        } else
            return (
                <Button
                    label="Выйти"
                    href="/auth/logout"
                    bgc="rgb(153, 36, 0)"
                />
            );
    };

    return (
        <div className="header">
            <div className="header_left-part">
                <Logo className="logo" path={logoPath} />
                <DropdownBtn className="btn header__btn" />
            </div>
            <SignButtons />
            {user.ok ? <Greetings name={user.name || user.login} /> : <></>}
        </div>
    );
}
