let express = require('express')
let router = express.Router()
const { User } = require('../models')
const { UniqueConstraintError } = require("sequelize/lib/errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


router.post("/signup/", async (req, res) => {
    let message 
    console.log(`Entering the USER SIGNUP route`)
    try {

        const my_user = await User.create({
            email: req.body.user.email,
            password: bcrypt.hashSync(req.body.user.password,15),
            role: req.body.user.role
        })
        console.log(my_user.toJSON());
        
        let token = jwt.sign({ id: my_user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 12 });

        res.status(201).json({
            message: "User Created",
            user: my_user,
            sessionToken: token
        });


    } catch (err){

        if (err instanceof UniqueConstraintError) {
            res.status(409).json({
                message: "Be more unique - email already in use. Or maybe you've signed up before - try logging in.",
            });
        } else {
            res.status(500).json({
                message: "Sorry - failed to sign up",
                err: err
            });
        }

        console.log(err)
        message = {
            msg:'Failed to Create User', 
            err: err
        }
    }
    res.json(message)
})

router.post("/login/", async (req, res) => {
    let message 
    console.log(`Entering the USER LOGIN route`);
    console.log('***********************');
    console.log("### req", req.body);
    console.log('***********************');
    let { email, password } = req.body.user;

    // const { user } = req.body;
    // const { email, password } = user;

    try {
        const loggedInUser = await User.findOne({
            where: {
                email: email,
            },
        });
        
        if (loggedInUser) {

            let passwordComparison = await bcrypt.compare(password, loggedInUser.password);
            
            if (passwordComparison) {
                let token = jwt.sign({ id: loggedInUser.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 12 });
                
                res.status(200).json({
                    user: loggedInUser,
                    message: "Great! Let's start crafting!",
                    sessionToken: token
                });
            } else {
                res.status(401).json({
                    message: "Fail.  Incorrect email or password."
                })
            }
            } else {
            res.status(401).json({
                message: "Fail.  Incorrect email or password."
            });
            }
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't log you in."
        })
        
        console.log(err)
        message = {
            msg:'Failed to Log in User', 
            err: err
        }
    }
})

module.exports = router
