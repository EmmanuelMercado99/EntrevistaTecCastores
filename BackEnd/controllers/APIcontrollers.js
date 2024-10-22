require("dotenv").config()

const axios = require("axios")

const API_KEY = process.env.API_KEY
const URL_Search = "https://www.googleapis.com/youtube/v3/search"



exports.getVideo = async(req,res) =>{
    console.log("Obteniendo listado de vídeos");
    const searchTerm = req.query.searchTerm
    const params = {
        part: 'snippet',
        q: searchTerm,
        maxResults: 16,
        type: 'video',
        key: API_KEY
    }
    try {
        const response = await axios.get(URL_Search, { params })
        const {items} = response.data
        res.status(200).json({data:items})
    }
    catch{
        res.status(400).json({error:"Error en la petición"})
    }
    finally{
        console.log("Se finalizó el proceso de búsqueda");
    }
}