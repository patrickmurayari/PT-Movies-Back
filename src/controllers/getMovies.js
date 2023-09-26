const {Movie} = require('../db')
const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
        'X-RapidAPI-Key': '5c9b5eb2a1msh0f5f4b68f3b31e1p179775jsnd4def2108063',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const getApi = async (req, res) => {
    // res.status(200).json({ message: "hola mundoo" })
    try {
        const response = await axios.request(options);
        const apiInfo = await response.data.results.map(mv => {
            return {
                // id : mv._id,
                image : mv.primaryImage?.url,
                title: mv.primaryImage?.caption.plainText,
                release_year : mv.releaseYear.year,
                type_title : mv.titleType.text,
            }
        })

        for (const movieData of apiInfo) {
            await Movie.create(movieData);
        }


        res.status(200).json(apiInfo)
        // console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}



module.exports = {
    getApi
}