require('dotenv').config()
const express = require('express')
const app = express()
const { sequelize } = require('./db')
const { User } = require('./models/User')
const { Comment } = require('./models/Comment')
const { Cocktail } = require('./models/Cocktail')
const { Role } = require('./models/Role')
const { Permission } = require('./models/Permission')
const { Role_Permission } = require('./models/Role_Permission')

;(async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
    User(sequelize)
    Comment(sequelize)
    Cocktail(sequelize)
    Role(sequelize)
    Permission(sequelize)
    Role_Permission(sequelize)



    sequelize.sync({force: true});
    // using alter instead of force during development per
    // https://www.jaygould.co.uk/2018-06-11-sequelize-setup-sync-migrations-postgres/
})()

const port = 3000
const auth = require('./controllers/Auth')
app.use("/", auth)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
