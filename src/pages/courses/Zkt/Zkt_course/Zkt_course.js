import React from 'react'
import ReactPlayer from 'react-player'
import Info_course from './Info_course/Info_course'
import SideMenu_course from './SideMenu_course/SideMenu_course'

import 'bootstrap/dist/css/bootstrap.css';
import './Zkt_course.scss'

export default function Zkt_course() {
  return (
    <div className="Zkt_course">
      <div>
        <ReactPlayer className="ReactPlayer" url="https://www.youtube.com/watch?v=y54yFlBez6o" width="100%" height="244px" controls="true" />
        <Info_course className="Info_course" />
      </div>
      <SideMenu_course className="SideMenu_course" />
    </div>
  )
}
