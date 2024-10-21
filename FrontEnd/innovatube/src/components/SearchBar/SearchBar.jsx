
const SearchBar = () => {
    return (
        <div class="input-group" style={{ maxWidth: "500px" }}>
            <input type="text" class="form-control" placeholder="¿Qué quieres ver hoy?" aria-label="Buscar videos..." aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
        </div>
    )
}

export default SearchBar;