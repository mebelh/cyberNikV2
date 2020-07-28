import React, { useState } from 'react'
import Module from './Module/Module'

export default function ModuleGroupe(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(
      <Module />
    )
  }
  return arr
}
