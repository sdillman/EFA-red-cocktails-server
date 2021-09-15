// from Justin's example - tests to verify db connection  //

let express = require('express')
let router = express.Router()
const { sequelize } = require('../db')

const UserModel = require('../db')

router.get("", (req,res) => {
    res.send("Hello World!")
})

router.post("/signup", (req,res) => {
    res.send("Sign up")
})

router.post("/login", (req,res) => {
    res.send("login")
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

// from Justin's example - tests to verify db connection  //
