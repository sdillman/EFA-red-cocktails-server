require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');

const express = require('express')
const app = express()
const { sequelize } = require('./db')



;(async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }

    // User(sequelize)
    // Comment(sequelize)
    // Cocktail(sequelize)
    // Role(sequelize)
    // Permission(sequelize)
    // Role_Permission(sequelize)



        // handy for finding a user
        // let resultUser = await User.findOne({
        //     where: {
        //         id: 1
        //     }
        // })
        // console.log(resultUser);


    sequelize.sync();
    // using alter instead of force during development per
    // https://www.jaygould.co.uk/2018-06-11-sequelize-setup-sync-migrations-postgres/
})()

const port = 3000
const auth = require('./controllers/Auth')
app.use("/user", auth)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
