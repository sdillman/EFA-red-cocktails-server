let express = require('express')
let router = express.Router()
let validateSession = require("../middleware/validateSession");
const { Cocktail, User } = require('../models')

// /cocktail

/**
 * Post a new cocktail from a logged-in user
 */

router.post("/add/", validateSession, async(req, res) => {
    let message;

    try{
        let u = await User.findOne({ where: { id: req.user.id } })

        if (u) {
            let cocktail = await Cocktail.create({ 
                cocktail_name: req.body.cocktail.cocktail_name,
                cocktail_img_url: req.body.cocktail.cocktail_img_url, 
                instructions: req.body.cocktail.instructions,
                ingredients: req.body.cocktail.ingredients
            });

            await u.addCocktail(cocktail)

            let { id, cocktail_name } =  cocktail;
            message = { message: "Cocktail added!", data: { id, cocktail_name }}    
        }
        else {
            message = { message: "Can't add the cocktail; user does not exist", data: null }
        }

    } catch(err) {
        message = { message: "Cocktail Add Failed", err }
    }

    res.json(message)

})


/**
 * Get all of the logged-in user's ccoktails
 */

router.get("/mine/", validateSession, async(req, res) => {
    let u = await User.findOne({ where: { id: req.user.id }})

    let cocktails = u ? await u.getCocktails() : null

    if (cocktails){
        let cleaned_cocktails = cocktails.map( p => {
                    const { id, cocktail_name } = p
                    return { id, cocktail_name }
        })

        res.send(cleaned_cocktails)
    }
    else
        res.send(cocktails)
})

/**
 * Delete a cocktail - logged-in user's own
 */

 router.delete("delete/:id", validateSession, async(req, res) => {
    let message;

    try{
        let drink = await Cocktail.findOne({ where: { id: req.params.id } })

        if (drink) {
            let cocktail = await Cocktail.destroy({where: { id: req.params.id } })
            await drink.destroy(cocktail);


            message = { message: "Cocktail deleted!" }    
        } else {
            message = { message: "Can't delete the cocktail; it does not exist", data: null }
        }

    } catch(err) {
        message = { message: "Cocktail Delete Failed", err }
    }

    res.json(message)

})


/**
 * Get all of a user's cocktails
 */

router.get("/member/:id", validateSession, async(req, res) => {
    let u = await User.findOne({ where: { id: req.params.id }})
    let cocktails = u ? await u.getCocktails() : null
    if (cocktails){
        let cleaned_cocktails = cocktails.map( p => {
                    const { id, cocktail_name } = p
                    return { id, cocktail_name }
        })

        res.send(cleaned_cocktails)
    }
    else
        res.send(cocktails)
})


/**
 * Delete any cocktail - ADMIN
 */

router.delete("/delete/:id", validateSession, async(req, res) => {
    let message;

    try{
        let drink = await Cocktail.findOne({ where: { id: req.params.id } })
        let u = await User.findOne({ where: { id: req.user.id }})

        if (u.id && drink.UserId || u.role===3) {
            let cocktail = await Cocktail.destroy({where: { id: req.params.id } })
            await drink.destroy(cocktail);


            message = { message: "Cocktail deleted!" }    
        } else {
            message = { message: "Can't delete the cocktail; it does not exist", data: null }
        }

    } catch(err) {
        message = { message: "Cocktail Delete Failed", err }
    }

    res.json(message)

})


/**
 * Get any one cocktail
 */

 router.get("/one/:id", validateSession, async(req, res) => {
    let message;

    try{
        let drink = await Cocktail.findOne({ where: { id: req.params.id } })

        if (drink) {
            res.send(drink);
            message = { message: "Cocktail delivered!" }    
        } else {
            message = { message: "Can't deliver the cocktail; it does not exist", data: null }
        }

    } catch(err) {
        message = { message: "Cocktail Get Failed", err }
    }

    res.json(message)

})


/**
 * Get all ccoktails
 * Enhancement tk - grouped by User
 */

 router.get("/all/", validateSession, async(req, res) => {
    let drinks = await Cocktail.findAll()

    if (drinks){
        let cleaned_cocktails = drinks.map( p => {
                    const { id, cocktail_name } = p
                    return { id, cocktail_name }
        })

        res.send(cleaned_cocktails)
    }
    else
        res.send(drinks)
})


module.exports = router
