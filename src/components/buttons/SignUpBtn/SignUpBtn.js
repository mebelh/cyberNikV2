import React from 'react'
import './SignUpBtn.scss'
import { BrowserRouter, Link } from 'react-router-dom'

export default function SignUpBtn() {
  return (
    <BrowserRouter>
      <Link to="/auth/signup">
        <button className="SignUpBtn">Регистрация</button>
      </Link>
    </BrowserRouter>

  )
}