import React from 'react'
import './SignUp.scss'
import Email from '../authComponents/Email'
import Password from '../authComponents/Password'
import Name from '../authComponents/Name'
import SubmitBtn from '../authComponents/SubmitBtn'

export default function SignIn() {
  return (
    <div className="SignUp">
      <div className="formBgc">
        <form action='/auth/login' method="POST">
          <Name />
          <Email />
          <Password />
          <SubmitBtn text='Войти' />
        </form>
      </div>
    </div>
  )
}
