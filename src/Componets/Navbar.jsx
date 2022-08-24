import React from 'react'
import pufii from '../assets/pufii.png'
import logopuff from '../assets/logopuff.png'
import logounbrella from '../assets/logounbrella.png'
import logocart from '../assets/logocart.png'
import logonap from '../assets/logonap.png'
import arrowdown from '../assets/arrowdown.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logonav'>
        <img src={pufii} alt="logo" />
      </div>
      <div className='linksnav'>
          <div className='box1'>
            <a href="#pufipuff">
              <img src={logopuff} alt="" />
              <h3>PUFI PUFF</h3>
            </a>
          </div>
          <div className='box2'>
            <a href="#pufirain">
              <img src={logounbrella} alt="" />
              <h3>PUFI RAIN</h3>
            </a>
          </div>
          <div className='box3'>
            <a href="#puficart">
              <img src={logocart} alt="" />
              <h3>PUFI CART</h3>
            </a>
        </div>
        <div className='box4'>
          <a href="#pufinap">
            <img src={logonap} alt="" />
            <h3>PUFI NAP</h3>
          </a>
        </div>
      </div>
      <div className='opcions'>
        <a href="" className='auno'>MI CUENTA <img src={arrowdown} alt='logo' /></a>
        <a href="">MI COMPRA</a>        
      </div>
    </div>
  )
}

export default Navbar