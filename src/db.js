require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

// const dogs = require('./models/Dog')
// const temperaments = require('./models/Temperaments')
const MoviesModels = require('./models/MoviesModel')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dbmovies`, {
    logging: false, // set to console.log to see the raw SQL queries
});

MoviesModels(sequelize)

const {Movie} = sequelize.models;

module.exports = {
    ...sequelize.models,
    conn: sequelize
}