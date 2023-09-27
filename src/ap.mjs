import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.mjs';

const ap = express();

ap.use(express.json()); // Middleware para analizar JSON en el cuerpo de la solicitud
ap.use(express.urlencoded({ extended: true }));

ap.use(morgan('dev'));

ap.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173'); // Actualiza para que coincida con el dominio desde el que realizarás la solicitud
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

ap.use('/', routes);

export default ap;
