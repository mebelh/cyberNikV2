import React, { Component } from "react";
import "./SignIn.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import SubmitBtn from "../authComponents/SubmitBtn";

export default class SignIn extends Component {
    state = {
        login: "",
        password: "",
    };

    onLoginChange = (login) => {
        this.setState({ login });
    };

    onPasswordChange = (password) => {
        this.setState({ password });
    };

    checkLogin = async () => {
        await fetch("http://localhost:3001/auth/login/adm", {
            method: "POST",
            body: {
                test: "asdasdasdasdasd",
            },
        }).then((res) => console.log(res));
        // if (isOk.ok) {
        //     console.log("ok " + isOk);
        // }
    };

    render() {
        return (
            <div className="SignIn">
                <div className="formBgc">
                    <form
                        action="http://localhost:3001/auth/login"
                        method="POST"
                    >
                        <Email onLoginChange={this.onLoginChange} />
                        <Password onPasswordChange={this.onPasswordChange} />
                        <SubmitBtn text="Войти" checkLogin={this.checkLogin} />
                    </form>
                </div>
            </div>
        );
    }
}
