module.exports = (sequelize, DataTypes) => {
    const Cocktail = sequelize.define("Cocktail", {
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
        return Cocktail
}
