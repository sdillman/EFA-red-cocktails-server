const { DataTypes } = require("sequelize");
// const db = require("../db");

const DefineUser = (sequelize) => {
    return sequelize.define("User", {
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nick_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
}

module.exports = { DefineUser }
