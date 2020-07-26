import React from 'react'
import './SignInBtn.scss'
import { BrowserRouter, Link } from 'react-router-dom'

export default function SignInBtn() {
  return (
    <BrowserRouter>
      <Link to="/auth/signin">
        <button className="SignInBtn">Войти</button>
      </Link>
    </BrowserRouter>

  )
}
