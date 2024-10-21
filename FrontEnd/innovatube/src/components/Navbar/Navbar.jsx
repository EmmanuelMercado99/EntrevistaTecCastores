import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/slices/globalStates";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () =>{
        dispatch(logout)
        navigate('/')
    }
    return (
        <nav class="navbar bg-body-tertiary navbarHome fixed-top">
            <div class="container navbarContainer">
                <a class="navbar-brand" style={{ padding: 0 }} href="#">
                    <img src="castor3.png" alt="Home" width="80" height="80" />
                </a>
                <SearchBar></SearchBar>
                <button className="btnLogOut">
                <i class="bi bi-box-arrow-right" style={{ fontSize: "2rem", color: "red" }} onClick={logOut} ></i>
                </button>
               
            </div>
        </nav>
    )
}

export default Navbar