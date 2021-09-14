const { DataTypes } = require("sequelize");
// const db = require("../db");

const Role = (sequelize) => {
    return sequelize.define("Role", {
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}


module.exports = { Role }

