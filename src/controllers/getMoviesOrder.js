const { Movie } = require('../db')

const getOrderMovies = async (req, res) => {
    try {
        let { OrderMovie } = req.body

        if (OrderMovie !== 'ASC' && OrderMovie !== 'DESC') {
            return res.status(400).json({ error: 'Valor de OrderMovie no válido' });
        }

        const orderDirection = OrderMovie === 'ASC' ? 'DESC' : 'ASC';
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
