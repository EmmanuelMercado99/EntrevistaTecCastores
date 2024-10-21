import "./Home.css"
import CardsGallery from "../CardsGallery/CardsGallery";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div style={{paddingTop:"6%"}}>
                <CardsGallery></CardsGallery>
            </div>

        </div>
    )
}

export default Home;
