const Sequelize = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     ssl: process.env.ENVIRONMENT === 'production'
// });

// const sequelize = new Sequelize("postgres://postgres:eb6b832da9d3427dba30a45c56d23721@localhost:5432/cocktail-talk-db");

// module.exports = sequelize;

const sequelize = new Sequelize(
    process.env.DB_DBNAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        ssl: process.env.DB_ENVIRONMENT === 'production'  //from 48-hr pj
    }
)

module.exports = {
    sequelize
}