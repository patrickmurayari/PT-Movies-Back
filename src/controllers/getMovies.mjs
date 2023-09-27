// const { Movie } = require('../database.mjs')
// const axios = require('axios');

import { Movie } from "../database.mjs"
import axios from "axios"

let dataDownloaded = false;

const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
        'X-RapidAPI-Key': '87a6ad1794msh2c041b5af7cbf5ap1e57b2jsnbf637121ddf2',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const options2 = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles?page=2',
    headers: {
        'X-RapidAPI-Key': '5c9b5eb2a1msh0f5f4b68f3b31e1p179775jsnd4def2108063',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const getApi = async (req, res) => {
    // res.status(200).json({ message: "hola mundoo" })
    try {
        const response = await axios.request(options);
        const response2 = await axios.request(options2)

        const responseData1 = response.data.results;
        const responseData2 = response2.data.results;

        const responseTotal = responseData1.concat(responseData2)

        const apiInfo = await responseTotal.map((mv) => {
            return {
                id :mv._id,
                image: mv.primaryImage?.url,
                title: mv.primaryImage?.caption.plainText,
                release_year: mv.releaseYear.year,
                type_title: mv.titleType.text,
            }
        })

        for (const movieData of apiInfo) {
            try {
                const existingMovie = await Movie.findOne({ where: { id: movieData.id } });
                if (!existingMovie) {
                    // Si no existe, crea un nuevo registro en la base de datos
                    await Movie.create(movieData);
                }
            } catch (dbError) {
                console.error('Error al interactuar con la base de datos:', dbError.message);
            }
        }

        dataDownloaded = true;

        return apiInfo
    } catch (error) {
        console.error('Error en la solicitud a la API:', error.message);
        throw error;
    }
}

export const getAllMovies = async (req, res) => {

    try {
        const name = req.query.name;
        let moviesTotal = await getApi()

        if (name) {
            let moviesTitle = await moviesTotal.filter(el => el.title?.toLowerCase().includes(name.toLowerCase()))
            moviesTitle.length ?
                res.status(200).json(moviesTitle) :
                res.status(400).json('La pelicula no se encontro');
        } else {
            res.status(200).json(moviesTotal)
        }
    } catch (error) {
        console.error('Error en la ruta getAllMovies:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}



// export default getAllMovies;
// module.exports = {
//     getAllMovies
// }