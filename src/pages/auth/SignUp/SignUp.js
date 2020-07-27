import React from "react";
import "./SignUp.scss";
import Email from "../authComponents/Email";
import Password from "../authComponents/Password";
import Name from "../authComponents/Name";
import SubmitBtn from "../authComponents/SubmitBtn";

export default function SignIn() {
<<<<<<< HEAD
  return (
    <div className="SignUp">
      <div className="formBgc">
        <form action='/auth/login' method="POST">
          <Name />
          <Email />
          <Password />
          <SubmitBtn text='Регистрация' />
        </form>
      </div>
    </div>
  )
=======
    return (
        <div className="SignUp">
            <div className="formBgc">
                <form
                    action="http://localhost:3001/auth/register"
                    method="POST"
                >
                    <Name />
                    <Email />
                    <Password />
                    <SubmitBtn text="Войти" />
                </form>
            </div>
        </div>
    );
>>>>>>> d962cacac54d75d8bbae9936dbc8f6ac507f2751
}
