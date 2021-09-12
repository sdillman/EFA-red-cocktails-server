const { DataTypes } = require("sequelize");
// const db = require("../db");

const DefineComment = (sequelize) => {
    return sequelize.define("Comment", {
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
}

module.exports = { DefineComment }
