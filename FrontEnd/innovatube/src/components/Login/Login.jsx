import { Link } from 'react-router-dom';
import "./Login.css"


const Login = () => {
    return (
        
        <div className='loginBody'>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div className='loginBox'>
            <img className="logo" src="castor3.png" alt="logo" />
            <input type="email" class="form-control inputText" id="username" placeholder="Ingrese su usuario o su correo"></input>
            <input type="password" class="form-control inputText" id="password" placeholder="Ingrese su contraseña"></input>
            <button type="button" class="btn btnSubmit">Ingresar</button>
            <p>¿No tienes una cuenta? <Link to="/signup">Crear cuenta</Link></p>
            </div>
            
        </div>
    )
}

export default Login;