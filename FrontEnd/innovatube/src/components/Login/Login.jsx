import { Link } from 'react-router-dom';
import "./Login.css"


const Login = () => {
    return (
        <div className='loginBody'>
            <h1>Componente del login</h1>
            <p>
        ¿No tienes una cuenta? <Link to="/signup">Crear cuenta</Link>
            </p>
        </div>
    )
}

export default Login;