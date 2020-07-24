import React from 'react'
import './SignIn.scss'

export default function SignIn() {
  return (
    <div className="SignIn">
      <div className="formBgc">
        <form action='/auth/login'>
          <label htmlFor="email">
            <span>Email:</span>
            <input type="text" placeholder="Enter email" name="email" />
          </label>
          <label htmlFor="password">
            <span>Password:</span>
            <input type="password" placeholder="Password" name="password" />
          </label>
        </form>
      </div>
    </div>
  )
}
