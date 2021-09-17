// const db = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cocktail_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            timestamp: {
                type: DataTypes.DATE,
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        })
        return Comment
    }