import React from 'react'
import puff2 from '../assets/nap 2.jpg'

function PufiNap() {

  const seeMore = '> VER MAS';
  return (
    <div className='pufinap_main'>
    <div className='pufinap_text'>
      <img src={puff2} alt="img" />
      <h3>Pufi PUFF</h3>
      <p> Descripcion de producto. Este es un texto simulado.</p>
      <button> {seeMore}</button>
    </div>
    <div className='pufinap_backg'>                    
    </div>
</div>
  )
}

export default PufiNap