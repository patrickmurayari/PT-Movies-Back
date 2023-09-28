const { Movie } = require('../db.js')
// import { Movie } from "../database.mjs"

const getOrderMovies = async (req, res) => {
    try {
        let { order } = req.query
        console.log(':::OrderMovie:::', order);

        if (order !== 'ASC' && order !== 'DESC') {
            return res.status(400).json({ error: 'Valor de OrderMovie no válido' });
        }

        const orderDirection = order === 'ASC' ? 'DESC' : 'ASC';
        const orderedMovies = await Movie.findAll({
            order: [['release_year', orderDirection]],
        });

        res.status(200).json(orderedMovies);

        // console.log(OderMovie);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud.' });
    }
}

module.exports = {
    getOrderMovies
 } 
