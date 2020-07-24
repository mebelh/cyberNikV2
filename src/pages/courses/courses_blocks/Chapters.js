import React from 'react'
import './chapters.scss'

export default function Chapters(props) {
  return (
    props.chapters.map(el => (
      <div className='chapter'>
        <div className='chapter__header'>{el.header}</div>
        <div className='chapter__duration'>{el.videoDuration}</div>
      </div>
    ))

  )
}
