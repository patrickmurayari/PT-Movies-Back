const express = require('express')
const router = express.Router();

const {getApi} = require('../controllers/getMovies');

router.get("/all" , getApi);

module.exports = router;