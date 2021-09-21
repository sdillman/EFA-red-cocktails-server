// this is for user management actions, not authorization. Authorization endpoints are in Auth.js

let express = require('express')
let router = express.Router()
let validateSession = require("../middleware/validateSession");
const { User } = require('../models')


// Delete a user

router.delete("/delete/:id", validateSession, async(req, res) => {
    let message;

    try{
        let u = await User.findOne({ where: { id: req.params.id } })

        if (u) {
            await u.destroy();

            message = { message: "User deleted!" }    
        } else {
            message = { message: "Can't delete the user; user does not exist", data: null }
        }

    } catch(err) {
        message = { message: "User Delete Failed", err }
        console.log(err.message)
    }

    res.json(message)

})

module.exports = router