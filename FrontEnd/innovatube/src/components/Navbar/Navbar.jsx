import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/slices/globalStates";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout)
        navigate('/')
    }
    return (
        <nav class="navbar bg-body-tertiary navbarHome fixed-top">
            <div class="container navbarContainer">

                <div className="boxLogoFavs">
                <a class="navbar-brand" style={{ padding: 0 }}>
                    <Link to="/home"><img src="castor3.png" alt="Home" width="80" height="80" /></Link>
                </a>
                <Link to="/favorites" className="btn btn-primary btnFavs">
                    Favoritos
                    <i className="bi bi-heart-fill" style={{ fontSize: "2rem", color: "red" }}></i>
                </Link>
                </div>
                <div style={{Width:"560px"}}>
                <SearchBar></SearchBar>
                </div>
                
                <button className="btnLogOut">
                    <i class="bi bi-box-arrow-right" style={{ fontSize: "2rem", color: "red" }} onClick={logOut} ></i>
                </button>

                
            </div>
        </nav>
    )
}

export default Navbar