const express = require ('express');
const MoviesRouter = express.Router();

const { getAllMovies } = require( '../controllers/getMovies.js');
const  { getYearFilter } = require( '../controllers/getFilterYear.js');
const  { getOrderMovies } = require( '../controllers/getMoviesOrder.js');

MoviesRouter.get("/all", getAllMovies);
MoviesRouter.get("/yearFilter", getYearFilter);
MoviesRouter.get("/orderMovies", getOrderMovies);

module.exports =  MoviesRouter;



// const express = require('express')
// const router = express.Router();

// const {getAllMovies} = require('../controllers/getMovies');
// const {getYearFilter} = require('../controllers/getFilterYear');
// const {getOrderMovies} = require('../controllers/getMoviesOrder');

// router.get("/all" , getAllMovies);
// router.get("/yearFilter", getYearFilter )
// router.get("/orderMovies", getOrderMovies )

// module.exports = router;