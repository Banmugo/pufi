import React from 'react'
import imgUno from '../assets/uno.jpg'
import imgDos from '../assets/dos.jpg'
import imgTres from '../assets/tres.jpg'
import imgCuatro from '../assets/cuatro.jpg'
import imgCinco from '../assets/nap.jpg'
import imgSeis from '../assets/seis.jpg'
import Form from './Form/Form'

function Information() {
    return (
        <div className='info'>
            <div className='insta'>
                <h5>INSTAGRAM</h5>
                <p>#ESPUFI</p>
            </div>
            <div className='images'>
                <img src={imgUno} alt="img" />
                <img src={imgDos} alt="img" />
                <img src={imgTres} alt="img" />
                <img src={imgCuatro} alt="img" />
                <img src={imgCinco} alt="img" />
                <img src={imgSeis} alt="img" />
            </div>
            <div className='newsletter'>
                <h5>NEWSLETTER</h5>
                <p>SUSCRIBETE</p>
                <h6>y enterate de todas las novedades</h6>
                <Form />
            </div>
        </div>
    )
}

export default Information