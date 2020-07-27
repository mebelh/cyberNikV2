import React from 'react'
import './AdminHeader.scss'

export default function Subheader() {
  return (
    <div className="Subheader">
      <a href="/admin/users">Пользователи</a>
      <a href="/admin/addCourse">Добавить курс</a>
    </div>
  )
}
