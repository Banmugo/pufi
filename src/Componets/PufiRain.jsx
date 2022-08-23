import React from 'react'
// import stl from './Style/PufiRain.module.css'
import umbrella2 from '../assets/sombrilla3.png'

function PufiRain() {

   const seeMore = '> VER MAS'

  return (
    <div className='mainRain'>
        <div className='btn'>
          <button> Shop</button>          
        </div>
        <div className='text'>
          <img src={umbrella2} alt="img" />
          <h3>Pufi RAIN</h3>
          <p> Descripcion de producto. Este es un texto simulado.</p>
          <button> {seeMore}</button>
        </div>
    </div>
  )
}

export default PufiRain