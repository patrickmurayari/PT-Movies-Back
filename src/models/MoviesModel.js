const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("Movie", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
  }, {timestamps:false})
}