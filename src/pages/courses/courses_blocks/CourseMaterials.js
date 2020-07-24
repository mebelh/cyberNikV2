import React from 'react'
import Chapters from './Chapters'
// import 'font-awesome/css/font-awesome.min.css';
import './chapters.scss'

export default function CourseMaterials(props) {
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
