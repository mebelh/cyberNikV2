import React from 'react'
import './SignIn.scss'
import Email from '../authComponents/Email'
import Password from '../authComponents/Password'
import SubmitBtn from '../authComponents/SubmitBtn'

export default function SignIn() {
  return (
    <div className="SignIn">
      <div className="formBgc">
        <form action='/auth/login' method="POST">
          <Email />
          <Password />
          <SubmitBtn text='Войти' />
        </form>
      </div>
    </div>
  )
}
