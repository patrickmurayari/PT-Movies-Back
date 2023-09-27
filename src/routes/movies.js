const express = require('express')
const router = express.Router();

const {getAllMovies} = require('../controllers/getMovies');
const {getYearFilter} = require('../controllers/getFilterYear');
const {getOrderMovies} = require('../controllers/getMoviesOrder');

router.get("/all" , getAllMovies);
router.get("/yearFilter", getYearFilter )
router.get("/orderMovies", getOrderMovies )

module.exports = router;