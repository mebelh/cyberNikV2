import React from 'react'

export default function Logo({ path, height = '50px' }) {

  return (
    <a href="/">
      <img src={path}
        height={height}
        alt="Logo-white" />
    </a>
  )
}
