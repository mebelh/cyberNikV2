import React from 'react'

export default function Name() {
  return (
    <label htmlFor="name">
      <span>Name:</span>
      <input type="text" placeholder="Enter name" name="name" />
    </label>
  )
}
