// from Justin's example - tests to verify db connection  //

let express = require('express')
let router = express.Router()
const { User, Comment, Cocktail } = require('../models')
// const { sequelize } = require('../db')

router.get("", (req,res) => {
    res.send("Hello World!")
})

router.post("/signup", (req,res) => {
    res.send("Sign up")
})

router.post("/login", (req,res) => {
    res.send("login")
})

router.post("/cocktail", (req,res) => {
    res.send("cocktail")
})

router.post("/comment", (req,res) => {
    res.send("comment")
})

// let my_user = await User.create({
//     email: "testy@test.com",
//     password: "test",
//     nick_name: "testy",
//     role: null
// });
// console.log(my_user.toJSON());
// let my_role = await Role.create({
//     role: "user"
// });
// let my_permission = await Permission.create({
//     permission: "createOwnUser"
// });

// console.log(await my_user.getRole());
// await my_user.setRole(my_role);
// console.log(await my_user.getRole());

// console.log(await my_permission.getPermission());
// await my_permission.setPermission(my_permission);
// console.log(await my_permission.getPermission());


module.exports = router

// from Justin's auth.js  //
// let express = require('express')
// let router = express.Router()
// const { User } = require('../models')

// router.post("/create/:name", async (req, res) => {
//     let message 
//     console.log(User)
//     try {
//         const user = await User.create({
//             username: req.params.name
//         })
//         message = {
//             msg:'User Created', 
//             user
//         }
//     } catch (err){
//         console.log(err)
//         message = {
//             msg:'Failed to Create User'
//         }
//     }
//     res.json(message)
// })

// module.exports = router
