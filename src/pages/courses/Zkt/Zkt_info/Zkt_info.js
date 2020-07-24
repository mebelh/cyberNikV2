import React from 'react'

import Name from './../../courses_blocks/Name'
// import Hours from './courses_blocks/Hours'
import ReactPlayer from 'react-player'
import EnrollBtn from './../../courses_blocks/EnrollBtn'
import CourseMaterials from './../../courses_blocks/CourseMaterials'
import './../../courses_blocks/chapters.scss'
import './../../courses_blocks/coursePage.scss'

export default function Zkt() {

  let modules = [
    {
      header: 'Module 1',
      vidoDuration: "21 лекция • 30ч 15min",
      chapters: [
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        }
      ]
    },
    {
      header: 'Module 2',
      nameOfVideo: "How to make one  $",
      vidoDuration: "21 лекция • 30ч 15min",
      chapters: [
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        }
      ]
    },
    {
      header: 'Module 3',
      vidoDuration: "21 лекция • 30ч 15min",
      chapters: [
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        },
        {
          header: "How how how",
          videoDuration: "2minute"
        }
      ]
    },
  ]

  return (
    <div className="coursePage">
      <div className="courseHeader">
        <Name className="name" name="Лекции по ЗКТ" />
        {/* <Hours className="duration" hours='5' /> */}
        <EnrollBtn className="enrollBtn" />
        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=y54yFlBez6o" width="360px" height="244px" controls="true" />
      </div>
      <div className="courseMaterials">
        <CourseMaterials modules={modules} />
      </div>
    </div>
  )
}
