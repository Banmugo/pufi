import React from 'react'
import umbrella2 from '../assets/sombrilla3.png'

function PufiRain() {

   const seeMore = '> VER MAS'

  return (
    <div className='pufiRain_main'>
        <div className='pufiRain_btn'>
          <button> Shop</button>          
        </div>        
        <div className='pufiRain_text'>
          <img src={umbrella2} alt="img" />
          <h3>Pufi RAIN</h3>
          <p> Descripcion de producto. Este es un texto simulado.</p>
          <button> {seeMore}</button>
        </div>
    </div>
  )
}

export default PufiRain