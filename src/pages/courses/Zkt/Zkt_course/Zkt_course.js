import React from 'react'
import ReactPlayer from 'react-player'

import 'bootstrap/dist/css/bootstrap.css';

export default function Zkt_course() {
  return (
    <div>
      <ReactPlayer className="video" url="https://www.youtube.com/watch?v=y54yFlBez6o" width="360px" height="244px" controls="true" />

    </div>
  )
}
