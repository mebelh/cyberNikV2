import React from 'react'
import Logo from './../Logo/Logo'
import logoPath from './../img/cyberIzbushkaBlue.png'
import DropdownBtn from './../DropdownBtn/DropdownBtn'
import './Header.scss'
export default function Header() {
  return (
    <div className="header">
      <Logo className="logo" path={logoPath} />
      <DropdownBtn className="btn header__btn" />
    </div>
  )
}
