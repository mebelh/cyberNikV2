import React from 'react'
import './AddCourse.scss'
export default function addCourse() {
  return (
    <div className="addCourse">
      <h2>Добавить курс:</h2>
      <label>
        <span>Имя курса:</span>
        <input type="text" />
      </label>
      <div>
        <span>Цвет имени курса:</span>
        <input type="color" />
      </div>
      <div>
        <span>Цвет фона:</span>
        <input type="color" />
      </div>
      <div>
        <textarea placeholder="Короткое описание курса" rows="8" cols="80" />
      </div>
      <div>
        <textarea placeholder="Описание каждого модуля" rows="12" cols="80" />
      </div>
    </div>
  )
}
