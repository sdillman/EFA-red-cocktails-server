require('dotenv').config()
const express = require('express')
const app = express()
const { sequelize } = require('./db')
const { DefineUser } = require('./models/User')
const { DefineComment } = require('./models/Comment')
const { DefineCocktail } = require('./models/Cocktail')

;(async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
    DefineUser(sequelize)
    DefineComment(sequelize)
    DefineCocktail(sequelize)

    sequelize.sync({alter: true})
    // using alter instead of force during development per
    // https://www.jaygould.co.uk/2018-06-11-sequelize-setup-sync-migrations-postgres/
})()

const port = 3000
const auth = require('./controllers/Auth')
app.use("/", auth)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
