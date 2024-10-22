import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { login,logout } from './redux/slices/globalStates';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import FavoritePage from './components/favoritePage/favoritePage';

//{valueLogin? ("Inicia sesion"):("Favor de iniciar sesión")}
function App() {
  const valueLogin = useSelector((state) => state.loginSession.login)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Favorites" element={<FavoritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
