
import { Link } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () =>{
    return(
        <div className='signUpBody'>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>


            <div className='signUpBox'>
            <img className="logo" src="castor3.png" alt="logo" />
            <input type="input" class="form-control inputText" id="name" placeholder="Nombre"></input>
            <input type="input" class="form-control inputText" id="lastname" placeholder="Apellidos"></input>
            <input type="input" class="form-control inputText" id="user" placeholder="Usuario"></input>
            <input type="password" class="form-control inputText" id="password" placeholder="Ingrese su contraseña"></input>
            <input type="password" class="form-control inputText" id="password" placeholder="Reingrese su contraseña"></input>

            <button type="button" class="btn btnSubmit">Crear</button>
            <p>¿Ya tienes una cuenta?</p>
            <p>Ingresa aquí <Link to="/">Iniciar sesión</Link></p>
            </div>
            
        </div>
    )
}

export default SignUp;