import React from 'react'
import ReactPlayer from 'react-player'
import Info_course from '../../Info_course'

// import SideMenu from './../../SideMenu'
import SideMenu from 'components/SideMenu'

// import '../../../../SideMenu_course/node_modules/bootstrap/dist/css/bootstrap.css';
import './style.scss'

export default function Zkt_course() {
  return (
    <div className="Course">
      <div>
        <ReactPlayer className="ReactPlayer" url="https://www.youtube.com/watch?v=zLcf3sslAZ8" width="100%" height="400px" controls="true" />
        <Info_course className="Info_course" />
      </div>
      <SideMenu className="SideMenu_course" />
    </div>
  )
}
