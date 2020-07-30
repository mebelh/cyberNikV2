import React, { useState, useEffect } from 'react'
import Lectures from './Lectures'
import Button from 'components/Button'

import './style.scss'
const { v4: uuidv4 } = require("uuid");

export default function Module() {
  const [numOfLectures, setNumOfLectures] = useState(0);

  useEffect(() => {
    if (numOfLectures <= 1) {
      setNumOfLectures(1)
    }
  }, [numOfLectures])

  return (
    <div key={uuidv4()}>
      < div className="Module" >
        <div>
          <span>Имя модуля:</span>
          <input type="text" />
        </div>
        <div>
          <span>Продолжительность:</span>
          <input id="duration" type="text" />
        </div>


        <Button label="Добавить видео" bgc="#00587a" onClick={() => setNumOfLectures(numOfLectures + 1)} />
        <Button label="Убрать видео" bgc="#803100" onClick={() => setNumOfLectures(numOfLectures - 1)} />

        {/* <button onClick={() => setNumOfLectures(numOfLectures + 1)}>Добавить видео</button> */}
        {/* <button onClick={() => {
        }} > Убрать видео</button> */}
      </ div>
      <Lectures n={numOfLectures} />
    </div >
  )
}
