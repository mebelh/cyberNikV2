import React from 'react'

export default function addCourse() {
  return (
    <div className="addCourse">
      <h2>Добавить курс:</h2>
      <label>
        <span>Имя курса:</span>
        <input type="text" />
      </label>
      <label>
        <span>Цвет имени курса:</span>
        <input type="color" />
      </label>
      <label>
        <span>Цвет фона:</span>
        <input type="color" />
      </label>
      <label>
        <span>Короткое описание курса:</span>
        <input type="text" />
      </label>
      <label>
        <span>Описание каждого модуля</span>
        <input type="text" />
      </label>
    </div>
  )
}
