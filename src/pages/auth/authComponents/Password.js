import React from "react";

<<<<<<< HEAD
export default function Password() {
  return (
    <label>
      <span>Пароль:</span>
      <input type="password" placeholder="Password" name="password" />
    </label>
  )
=======
export default function Password({ onPasswordChange }) {
    return (
        <label htmlFor="password">
            <span>Password:</span>
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={({ target }) => {
                    onPasswordChange(target.value);
                }}
            />
        </label>
    );
>>>>>>> d962cacac54d75d8bbae9936dbc8f6ac507f2751
}
