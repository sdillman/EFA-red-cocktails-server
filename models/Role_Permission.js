const { DataTypes } = require("sequelize");
// const db = require("../db");

const Role_Permission = (sequelize) => {
    return sequelize.define("Role_Permission", {
        role: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        permission: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}


module.exports = { Role_Permission }