import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './DropdownBtn.scss'

export default function DropdownBtn() {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Изучить">
        <Dropdown.Item href="/lectures">Лекции</Dropdown.Item>
        <Dropdown.Item href="/library">Библиотека</Dropdown.Item>
        <Dropdown.Item href="/films">Учебные фильмы</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}
