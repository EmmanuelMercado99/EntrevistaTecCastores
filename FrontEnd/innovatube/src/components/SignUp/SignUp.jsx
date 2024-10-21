import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import ReCAPTCHA from 'react-google-recaptcha';
import CryptoJS from 'crypto-js';
import { addUser } from '../../redux/slices/userSlices';
import { useDispatch, useSelector } from 'react-redux';




const SignUp = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userData.users)
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        user: "",
        password: "",
    })

    const [passwordOk, setPasswordOk] = useState({
        password2: ""
    })

    const [captcha, setCaptcha] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleInputChangePassword = (e) => {
        const { name, value } = e.target
        setPasswordOk({ ...passwordOk, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password === passwordOk.password2) {
            console.log('Si es la misma');
            const userExists = users.some(existingUser => existingUser.user === formData.user);

            if (userExists) {
                alert("Ya existe este usuario, favor de ingresar otro")
            }
            else {
                const hashedPassword = CryptoJS.MD5(formData.password).toString()
                alert("Usuario agregado correctamente")
                dispatch(addUser({ ...formData, password: hashedPassword }))
                setFormData({
                    name: "",
                    lastname: "",
                    user: "",
                    password: "",
                })
                setPasswordOk({
                    password2:""
                })
            }
        }
        else {

        }
    }


    return (
        <div className='signUpBody'>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>

            <div className='signUpBox'>
                <img className="logo" src="castor3.png" alt="logo" />

                <form onSubmit={handleSubmit} className='signUpForm'>
                    <input type="input" class="form-control inputText" value={formData.name} onChange={handleInputChange} id="name" name="name" placeholder="Nombre"></input>
                    <input type="input" class="form-control inputText" value={formData.lastname} onChange={handleInputChange} id="lastname" name="lastname" placeholder="Apellidos"></input>
                    <input type="input" class="form-control inputText" value={formData.user} onChange={handleInputChange} id="user" name="user" placeholder="Usuario"></input>
                    <input type="password" class="form-control inputText" value={formData.password} onChange={handleInputChange} id="password" name="password" placeholder="Ingrese su contraseña"></input>
                    <input type="password" class="form-control inputText" value={passwordOk.password2} onChange={handleInputChangePassword} id="password2" name="password2" placeholder="Reingrese su contraseña"></input>
                    <ReCAPTCHA
                        sitekey="6LfMnWMqAAAAAJ6r1fXFv6pSSOt92f-cnVGU6ao5" 
                        onChange={(value) => setCaptcha(value)} 
                    />
                    <button type="submit" class="btn btnSubmit">Crear</button>
                </form>

                <p>¿Ya tienes una cuenta?</p>
                <p>Ingresa aquí <Link to="/">Iniciar sesión</Link></p>
            </div>

        </div>
    )
}

export default SignUp;