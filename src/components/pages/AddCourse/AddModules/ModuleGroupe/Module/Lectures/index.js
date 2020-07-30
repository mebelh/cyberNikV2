import React from 'react'
import Lecture from './Lecture'


export default function Lectures({ n }) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push((<Lecture />))
  }
  return arr;
}
