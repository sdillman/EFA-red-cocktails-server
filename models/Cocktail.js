module.exports = (sequelize, DataTypes) => {
    const Cocktail = sequelize.define("Cocktail", {

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
