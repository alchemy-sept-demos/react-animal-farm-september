import React from 'react'
import './Main.css'
import { animals } from '../../data'
import Animal from '../Animal/Animal'

import bg from '../../background.png'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${bg})` }}>
      {animals.map((animal) => (
        <Animal key={animal.type} {...animal} />
      ))}
    </main>
  )
}
