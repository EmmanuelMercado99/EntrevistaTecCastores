import "./Home.css"
import CardsGallery from "../CardsGallery/CardsGallery";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import PageNotFound from "../PageNotFound/PageNotFound";

const Home = () => {
    const valueLogin = useSelector((state) => state.loginSession.login)
    return (
        
        <div>
            {valueLogin?(<div>
                <div>
                <Navbar></Navbar>
            </div>
            <div style={{paddingTop:"7%"}}>
                <CardsGallery></CardsGallery>
            </div>
            </div>):
            <div>
                <PageNotFound></PageNotFound>
            </div>
            }
            

        </div>
    )
}

export default Home;
