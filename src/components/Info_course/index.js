import React from 'react'


export default function Info_course({ shortDesc, longDescArr }) {
  return (
    <div className="info-course">
      <h2>Об это курсе</h2>
      <p>{shortDesc}</p>
      <h3>Описание:</h3>
      <div className="desc_long">
        {longDescArr
          .map(el =>
            <p>
              {el}
            </p>
          )
        }
      </div>
    </div>
  )
}
