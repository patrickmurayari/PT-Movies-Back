import { config as dotenvConfig } from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import MoviesModel from './models/MoviesModel.mjs';

dotenvConfig(); // Carga las variables de entorno desde el archivo .env

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE
} = process.env;

const sequelize = new Sequelize(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
    logging: false, // Establece a "console.log" para ver las consultas SQL sin procesar en la consola.
});

// Importa el modelo de MoviesModel

MoviesModel(sequelize);

// Obtén el modelo Movie del objeto sequelize.models
const { Movie } = sequelize.models;

// Exporta todos los modelos y la instancia de sequelize
export {
    Movie, // Agrega otros modelos aquí si los tienes
    sequelize as conn // Alias de la instancia sequelize
};