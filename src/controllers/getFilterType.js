const { Movie } = require('../db.js')

const getTypeFilter = async (req,res ) => {

    try {
        const { type } = req.query;

        console.log(type);
    
        const movies = await Movie.findAll({
            where: {
                type_title : type
            }
        });
    
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }

}

module.exports = {
    getTypeFilter
}
