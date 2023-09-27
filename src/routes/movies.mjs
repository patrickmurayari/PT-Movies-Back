import express from 'express';
const MoviesRouter = express.Router();

import { getAllMovies } from '../controllers/getMovies.mjs';
import { getYearFilter } from '../controllers/getFilterYear.mjs';
import { getOrderMovies } from '../controllers/getMoviesOrder.mjs';

MoviesRouter.get("/all", getAllMovies);
MoviesRouter.get("/yearFilter", getYearFilter);
MoviesRouter.get("/orderMovies", getOrderMovies);

export default MoviesRouter;



// const express = require('express')
// const router = express.Router();

// const {getAllMovies} = require('../controllers/getMovies');
// const {getYearFilter} = require('../controllers/getFilterYear');
// const {getOrderMovies} = require('../controllers/getMoviesOrder');

// router.get("/all" , getAllMovies);
// router.get("/yearFilter", getYearFilter )
// router.get("/orderMovies", getOrderMovies )

// module.exports = router;