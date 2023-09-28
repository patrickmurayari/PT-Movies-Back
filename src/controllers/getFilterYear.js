const { Sequelize } = require('sequelize')
const { Movie } = require('../db.js')
const { Op } = Sequelize


const getYearFilter = async (req, res) => {
    try {
        let { rango1, rango2 } = req.query

        let valor1 = Number(rango1)
        let valor2 = Number(rango2)
        // console.log('::rango1::', typeof(valor1));
        // console.log('::rango2::', rango2);
        if (!Number.isInteger(valor1) || !Number.isInteger(valor2) || valor1 < 0 || valor2 < 0 || valor1 > valor2) {
            return res.status(400).json({ error: 'Valores de rango incorrectos' });
        }

        const moviesRange = await Movie.findAll({
            where: {
                release_year: {
                    [Op.between]: [valor1, valor2]
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

// export default getYearFilter;
module.exports = {
    getYearFilter
}