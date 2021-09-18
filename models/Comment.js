// const db = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {

            cocktail_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        })
        return Comment
    }