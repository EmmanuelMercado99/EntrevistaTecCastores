import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux';
import CryptoJS from 'crypto-js';
import { login } from "../../redux/slices/globalStates";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userData.users)
    const [loginData, setLoginData] = useState({
        userEmail: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (loginData.password != "" && loginData.userEmail != "") {
            const hashedPassword = CryptoJS.MD5(loginData.password).toString()
            const userExists = users.some(existingUser => (existingUser.user === loginData.userEmail || existingUser.email === loginData.userEmail) && existingUser.password === hashedPassword)
            if (userExists) {
                dispatch(login())
                navigate('/home')
            }
            else {
                alert('Usuario y/o contraseña incorrecta')
            }
        }
        else {
            alert('Campos vacíos, favor de ingresar su información')
        }
    }

    return (

        <div className='loginBody'>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div className='loginBox'>
                <img className="logo" src="castor3.png" alt="logo" />

                <form onSubmit={handleOnSubmit} className='LoginForm'>
                    <input type="text" class="form-control inputText" onChange={handleInputChange} id="username" name="userEmail" value={loginData.userEmail} placeholder="Ingrese su usuario o su correo"></input>
                    <input type="password" class="form-control inputText" onChange={handleInputChange} id="password" name="password" value={loginData.password} placeholder="Ingrese su contraseña"></input>
                    <button type="submit" class="btn btnSubmit">Ingresar</button>
                </form>

                <p>¿No tienes una cuenta? <Link to="/signup">Crear cuenta</Link></p>
            </div>

        </div>
    )
}

export default Login;