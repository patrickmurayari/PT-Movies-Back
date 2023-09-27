const { Sequelize } = require('sequelize')
const { Movie } = require('../db')
const { Op } = Sequelize

const getYearFilter = async (req, res) => {
    try {
        let { rango1, rango2 } = req.body

        if (!Number.isInteger(rango1) || !Number.isInteger(rango2) || rango1 < 0 || rango2 < 0 || rango1 > rango2) {
            return res.status(400).json({ error: 'Valores de rango incorrectos' });
        }

        const moviesRange = await Movie.findAll({
            where: {
                release_year: {
                    [Op.between]: [rango1, rango2]
                }
            }
        })

        if (moviesRange.length === 0) {
            return res.status(404).json({ message: 'No se encontraron películas en ese rango de años.' });
        }


        res.status(200).json(moviesRange)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud.' });
    }
}

module.exports = {
    getYearFilter
}