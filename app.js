require('dotenv').config()
const cors = require('./middleware/headers')

const express = require('express')
const app = express()
const port = 3000
// const { sequelize } = require('./db')

;(async() => {
  app.use(express.json())
  app.use(cors);

  const auth = require('./controllers/Auth')
  app.use("/auth", auth)

  const user = require('./controllers/User')
  app.use("/user", user)

  const comment = require('./controllers/Comment')
  app.use("/comment", comment)

  const cocktail = require('./controllers/Cocktail')
  app.use("/cocktail", cocktail)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})()

// ;(async () => {
//     try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     } catch (error) {
//     console.error('Unable to connect to the database:', error);
//     }

//     sequelize.sync();
//     // using alter instead of force during development per
//     // https://www.jaygould.co.uk/2018-06-11-sequelize-setup-sync-migrations-postgres/

//         // handy for finding a user
//         // let resultUser = await User.findOne({
//         //     where: {
//         //         id: 1
//         //     }
//         // })
//         // console.log(resultUser);



// })()
