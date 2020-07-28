import React from 'react'
import './style.scss'

export default function Subheader() {
  return (
    <div className="adminHeader">
      <a href="/admin/users">Пользователи</a>
      <a href="/admin/addCourse">Добавить курс</a>
    </div>
  )
}
