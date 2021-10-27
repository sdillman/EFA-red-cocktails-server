require('dotenv').config()
const cors = require('./middleware/headers')

const express = require('express')
const app = express()
const port = process.env.PORT
const { sequelize } = require('./db')

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

  })
})()

