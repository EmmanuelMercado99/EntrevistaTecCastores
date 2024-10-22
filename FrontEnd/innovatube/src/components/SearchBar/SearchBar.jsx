import { useDispatch } from 'react-redux';
import { setVideos } from '../../redux/slices/videoSlices'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [data,setData] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setData(value)
    }

    const searchDataApi = async (e)=>{
        e.preventDefault()
        navigate('/home')
        try{
            const response = await fetch(`https://apiinnovatube.onrender.com/youtube/getVideo?q=${data}`)
            const dataJson = await response.json()
            console.log(dataJson);
            dispatch(setVideos(dataJson))
        }
        catch{
            alert("Hubo un problema con la petición a la API, render no responde :(")
        }
        
        
    }

    return (
        <div class="input-group" style={{ width: "560px" }}>
            <input type="text" name="data" value={data} onChange={handleInputChange} class="form-control" placeholder="¿Qué quieres ver hoy?" aria-label="Buscar videos..." aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" onClick={searchDataApi} type="button" id="button-addon2"><i class="bi bi-search"></i></button>
        </div>
    )
}

export default SearchBar;