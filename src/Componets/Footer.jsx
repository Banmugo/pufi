import React from 'react'
import pufiFooter from '../assets/pufiFooter.png'
import logocompra1 from '../assets/logocompra1.png'
import logocompra2 from '../assets/logocompra2.png'
import face from '../assets/face.png'
import twit from '../assets/twit.png'
import insta from '../assets/insta.png'
import logofooter from '../assets/logofooter.png'


function Footer() {
  return (
    <div className='footerMain'>
      <div className='footertop'>
        <div className='logo'>
          <img src={pufiFooter} alt='logo' />
        </div>
        <div className='links'>
          <a href="#pufirain">PUFI RAIN</a>
          <a href="#pufipuff">PUFI PUFF</a>
          <a href="#puficart">PUFI CART</a>
          <a href="#pufinap">PUFI NAP</a>
        </div>
        <div className='contact'>
          <a href="">CONTACTO</a>
          <a href="">AYUDA</a>
          <a href="">CÓMO COMPRAR</a>
          <a href="">TÉRMINOS & CNDICIONES</a>
        </div>
        <div className='shop'>
          <div>
            <h4>COMPRA 100% SEGURA</h4>
          </div>
          <div className='shop2'>
            <img src={logocompra1} alt="logo" />
            <img src={logocompra2} alt="logo" />
            <p>COMPRÁ CON LA GARANTIA DE PUFI</p>

          </div>
        </div>
        <div className='redes'>
          <p>SEGUINOS EN </p>
          <a href="">
            <img src={face} alt="logo" />
          </a>
          <a href="">
            <img src={twit} alt="logo" />
          </a>
          <a href="">
            <img src={insta} alt="logo" />
          </a>

        </div>
      </div>
      <div className='footerButoom'>
        <h6> PUFI Copryright 2017 - Todos los derechos reservados</h6>
        <img src={logofooter} alt="logo" />
      </div>
    </div>
  )
}

export default Footer