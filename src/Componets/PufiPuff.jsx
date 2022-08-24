import React from 'react'
import puff2 from '../assets/puff2.jpg'

function PufiPuff() {
  
  const seeMore = '> VER MAS';

  return (
    <div className='pufipuff_main'>
        <div className='pufipuff_text'>
          <img src={puff2} alt="img" />
          <h3>Pufi PUFF</h3>
          <p> Descripcion de producto. Este es un texto simulado.</p>
          <button> {seeMore}</button>
        </div>
        <div className='pufipuff_backg'>                    
        </div>
    </div>
  )
}

export default PufiPuff