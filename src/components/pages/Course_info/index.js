import React from 'react'
import './style.scss'

import Button from 'components/Button'
import ReactPlayer from 'react-player'

// function Hours(props) {
//   return (
//     <p>
//       {props.hours} часов лекций
//     </p>
//   )
// }

function Name(props) {
  return (
    <h1 className="nameOfLecture">{props.name}</h1>
  )
}

function Chapters(props) {
  return (
    props.chapters.map(el => (
      <div className='chapter'>
        <div className='chapter__header'>{el.header}</div>
        <div className='chapter__duration'>{el.videoDuration}</div>
      </div>
    ))

  )
}

function CourseMaterials(props) {
  return (
    props.modules.map(el => (
      <React.Fragment>
        <div className='module'>
          <div className='module__header'> <i className="fas fa-angle-down"></i> {el.header}</div>
          <div className='module__duration'>{el.vidoDuration}</div>
        </div>
        <Chapters chapters={el.chapters} />
      </React.Fragment>
    ))
  )
}

export default function Course_info() {

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
        <Button className="enrollBtn" label="Записаться на курс" href="#" bgc="#07f" />
        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=y54yFlBez6o" width="360px" height="244px" controls="true" />
      </div>
      <div className="courseMaterials">
        <CourseMaterials modules={modules} />
      </div>
    </div>
  )
}
