const Sequelize = require('sequelize');

// LOCAL
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     ssl: process.env.ENVIRONMENT === 'production'
// });

// const sequelize = new Sequelize("postgres://postgres:eb6b832da9d3427dba30a45c56d23721@localhost:5432/cocktail-talk-db");

// module.exports = sequelize;


// HEROKU
const sequelize = new Sequelize(
   process.env.DATABASE_URL,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

async function syncDb(sequelize, options){
    const { force, alter } = options
    try {
        if (force)
            await sequelize.sync({force: true})
        else if (alter)
            await sequelize.sync({alter: true})
        else
            await sequelize.sync()
    } catch (err){
        console.log(err)
    }
}

sequelize.sync({force: true})

module.exports = {
    sequelize,
    syncDb
}