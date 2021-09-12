const { DataTypes } = require("sequelize");
// const db = require("../db");

const DefineCocktail = (sequelize) => {
    return sequelize.define("Cocktail", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cocktail_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cocktail_img_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        instructions: {
            type: DataTypes.JSON,
            allowNull: false
        }
    })
}

module.exports = { DefineCocktail }