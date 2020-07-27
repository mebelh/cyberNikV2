import React, { useState, useContext } from "react";
import "./SignIn.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import SubmitBtn from "../authComponents/SubmitBtn";

export default function SignIn({ onUserLogin }) {
    const [user, setUser] = useState({
        login: "",
        password: "",
    });

    const onLoginChange = (login) => {
        setUser({ login });
    };

    const onPasswordChange = (password) => {
        setUser({ password });
    };

    const checkLogin = async (e) => {
        e.preventDefault();
        console.log(user);
        fetch("http://localhost:3001/auth/login/adm/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({ ...user }),
        }).then(async (res) => {
            console.log(await res.json());
            if (res) {
                onUserLogin(await res.json());
            }
        });
    };

    return (
        <div className="SignIn">
            <div className="formBgc">
                <form
                    action="http://localhost:3001/auth/login"
                    method="POST"
                    onSubmit={checkLogin}
                >
                    <Email onLoginChange={onLoginChange} />
                    <Password onPasswordChange={onPasswordChange} />
                    <SubmitBtn text="Войти" />
                </form>
            </div>
        </div>
    );
}
