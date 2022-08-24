import React from 'react'
import Navbar from './Navbar'

function Inicio() {
  return (
    <div className='inicio'>
      <div className='inicionavbar'>
        <Navbar />
      </div>
      <div className='mainletras'>
        <div className='letrasinicio'>
          <h4>ESTÁR CÓMODO,</h4>
          <h4>NUNCA FUE TAN FÁCIL.</h4>
        </div>
        <div className='btn'>
          {/* <a href=""></a> */}
          <button type='button'>SHOP</button>
        </div>
      </div>

    </div>
  )
}

export default Inicio