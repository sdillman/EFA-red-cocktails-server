const { DataTypes } = require("sequelize");
// const db = require("../db");

const UserModel = (sequelize) => {
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
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
// User.hasMany(Cocktail, {
//     // onDelete: "CASCADE"  // when you delete the user, also delete the profile. https://sequelize.org/master/manual/assocs.html
// });
// Cocktail.belongsToMany(User, { through: "Users_Cocktails" });
// User.belongsToMany(Cocktail, { through: "Users_Cocktails" });

module.exports = { UserModel }
