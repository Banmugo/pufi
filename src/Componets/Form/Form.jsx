import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postForm } from '../../redux/actions';
import arrow from '../../assets/arrow.png';
import Swal from 'sweetalert2';

function validation(input) {
    let errors = '';
    if (!input) {
        errors = '';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        errors = 'email is invalid';
    }
    return errors;
}

function Form() {
    
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');
    const [input, setInput] = useState({
        email: ''
    });

    function handleChange(e) {
        setInput({
            email: e.target.value,
        })
        setErrors(validation(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (input.email !== '') {
            dispatch(postForm(input))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro con exito. !!!!',
                showConfirmButton: false,
                timer: 1500
              })            
            setInput({
                email: ''
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa un email.'                
              })
        }
    }

    return (
        <div className='form'> 
        <div className='form2'>
            <input type="email" placeholder='Ingresa tu email' name='email' value={input.email} onChange={e => handleChange(e)} />
            <button disabled={errors ? true : false} onClick={e => handleSubmit(e)}><img src={arrow} alt='icono'/></button>
        </div>
        <div className='errors'>
            {errors && (<p className="danger">{errors}</p>)}
        </div>
        </div>
    )
}

export default Form