import React from 'react'
import './Lecture.scss';
const { v4: uuidv4 } = require("uuid");
export default function Lecture() {
  return (
    <div key={uuidv4()} className="Lecture">
      <div>
        <span>Имя лекции:</span>
        <input type="text" />
      </div>
      <div>
        <span>Продолжительность:</span>
        <input type="text" />
      </div>
      <div>
        <span>Ссылка:</span>
        <input type="text" />
      </div>
    </div>
  )
}
