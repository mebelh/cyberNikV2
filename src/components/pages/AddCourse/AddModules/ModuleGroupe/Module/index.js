import React, { useState } from 'react'
import Lectures from './Lectures'
import './style.scss'
const { v4: uuidv4 } = require("uuid");

export default function Module() {
  const [numOfLectures, setNumOfLectures] = useState(0);

  return (
    <React.Fragment key={uuidv4()}>
      < div className="Module" >
        <div>
          <span>Имя модуля:</span>
          <input type="text" />
        </div>
        <div>
          <span>Продолжительность:</span>
          <input id="duration" type="text" />
        </div>
        <button onClick={() => setNumOfLectures(numOfLectures + 1)}>Добавить видео</button>
        <button onClick={() => (numOfLectures > 0 ? setNumOfLectures(numOfLectures - 1) : console.log("num <= 0"))} > Убрать видео</button>
      </ div>
      <Lectures n={numOfLectures} />
    </React.Fragment>
  )
}
