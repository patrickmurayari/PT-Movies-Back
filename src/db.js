require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE
} = process.env;

// const dogs = require('./models/Dog')
// const temperaments = require('./models/Temperaments')
const MoviesModels = require('./models/MoviesModel')

const sequelize = new Sequelize(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
    logging: false, // set to console.log to see the raw SQL queries
});

postgresql://postgres:IYZBWZFQWbNAdvnvjKqj@containers-us-west-206.railway.app:7276/railway

MoviesModels(sequelize)

const {Movie} = sequelize.models;

module.exports = {
    ...sequelize.models,
    conn: sequelize
}