import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { login,logout } from './redux/slices/globalStates';

function App() {
  const valueLogin = useSelector((state) => state.loginSession.login)
  return (
    <div>
      <h1>
        {valueLogin? ("Inicia sesion"):("Favor de iniciar sesión")}
      </h1>
    </div>
  );
}

export default App;
