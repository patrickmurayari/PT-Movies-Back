import { Router } from 'express';
import MoviesRouter from './movies.mjs';

const router = Router();

router.use("/movie", MoviesRouter);

export default router;


// const { Router } = require('express');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const Movies = require('./movies');
// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// router.use("/movie", Movies);


// module.exports = router;