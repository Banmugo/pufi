import React from 'react'
import bolsa2 from '../assets/bolsa 2.jpg'

function PufiCart() {

  const seeMore = '> VER MAS';

  return (
    <div className='pufiCart_main'>
      <div className='pufiCart_backg'>
        <button> Shop</button>
      </div>
      <div className='pufiCart_text'>
        <img src={bolsa2} alt="img" />
        <h3>Pufi CART</h3>
        <p> Descripcion de producto. Este es un texto simulado.</p>
        <button> {seeMore}</button>
      </div>
    </div>
  )
}

export default PufiCart