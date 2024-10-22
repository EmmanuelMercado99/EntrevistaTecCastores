import "./PageNotFound.css"
import { Link } from "react-router-dom";
const PageNotFound = ()=>{
    return(
        <div className="bodyNotFound">
            <h1>
               Lo sentimos 🙁
            </h1>
            <h1>
               Necesitas iniciar sesión primero
            </h1>
            <Link to ="/">
            <button type="submit" class="btn BtnBackLogin">Inciar sesión</button>
            </Link>
            
        </div>
    )
}

export default PageNotFound;