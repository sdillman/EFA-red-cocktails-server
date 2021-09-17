module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define("Permission", {
        permission: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Permission
}