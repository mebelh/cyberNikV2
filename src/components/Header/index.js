import React, { useContext } from "react";
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
    let time = new Date()
    setInterval(() => { time = new Date() }, 3600)

    let hours = time.getHours();
    let ans = '';

    if (hours > 0 && hours < 6) {
        ans = `Доброй ночи ${name}`
    } else if (hours > 6 && hours < 12) {
        ans = `Доброе утро ${name}`
    } else if (hours > 12 && hours < 18) {
        ans = `Добрый день ${name}`
    } else if (hours > 18 && hours < 24) {
        ans = `Добрый вечер ${name}`
    }

    return <div style={{
        color: '#00a3cc',
        fontSize: "20px"
    }}> {ans}</div >

}



export default function Header() {
    const { onUserLogin } = useContext(Context);

    return (
        <div className="header">
            <div className="header__left-part">
                <Logo className="logo header__logo" path={logoPath} />
                <DropdownBtn className="btn header__btn-learn" />
            </div>

            <div className="header__right-part">
                <Greetings className="header__greetings" name={"Artem"} />
                <div>
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
            </div>
        </div>
    );
}
