import React from "react";

<<<<<<< HEAD
export default function Email() {
  return (
    <label>
      <span>Email:</span>
      <input type="text" placeholder="Enter email" name="email" />
    </label>
  )
=======
export default function Email({ onLoginChange }) {
    return (
        <label htmlFor="login">
            <span>Email:</span>
            <input
                type="text"
                placeholder="Enter email"
                name="login"
                onChange={({ target }) => {
                    onLoginChange(target.value);
                }}
            />
        </label>
    );
>>>>>>> d962cacac54d75d8bbae9936dbc8f6ac507f2751
}
