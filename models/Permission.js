const { DataTypes } = require("sequelize");
// const db = require("../db");

const Permission = (sequelize) => {
    return sequelize.define("Permission", {
        permission: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}


module.exports = { Permission }