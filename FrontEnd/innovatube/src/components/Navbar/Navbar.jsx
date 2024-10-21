import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar bg-body-tertiary navbarHome">
            <div class="container navbarContainer">
                <a class="navbar-brand" style={{ padding: 0 }} href="#">
                    <img src="castor3.png" alt="Home" width="80" height="80" />
                </a>
                <div class="input-group" style={{maxWidth:"500px"}}>
                    <input type="text" class="form-control" placeholder="¿Qué quieres ver hoy?" aria-label="Buscar videos..." aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
                </div>
                <i class="bi bi-box-arrow-right" style={{ fontSize: "2rem", color: "red" }}></i>
            </div>
        </nav>
    )
}

export default Navbar