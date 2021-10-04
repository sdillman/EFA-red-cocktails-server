let express = require('express')
let router = express.Router()
let validateSession = require("../middleware/validateSession");
const { Cocktail, User } = require('../models')

// app.js /cocktail

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
            // ingredients: '[ {"name": "Tequila", "measure": "2 1\/2 shots"},{"name": "Triple sec", "measure": "1 shot"}, {"name": "Lime juice", "measure": "2 oz"}, {"name": "Salt", "measure": ""}]'
            await u.addCocktail(cocktail)

            let { id, cocktail_name } =  cocktail;
            message = { message: "Cocktail added!", data: { id, cocktail_name }}    
        }
        else {
            message = { message: "Can't add the cocktail; user does not exist", data: null }
        }

    } catch(err) {
        message = { message: "Cocktail Add Failed", err }
        console.log(err)
    }

    res.json(message)

})


// Get all the current user's cocktails

router.get("/mine/", validateSession, async(req, res) => {
    let u = await User.findOne({ where: { id: req.user.id }})
    console.log(u);
    let cocktails = u ? await u.getCocktails() : null
    console.log(cocktails);
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


// Get all of a buddy's cocktails

router.get("/member/:id", validateSession, async(req, res) => {
    let u = await User.findOne({ where: { id: req.params.id }})
    console.log(u);
    let cocktails = u ? await u.getCocktails() : null
    console.log(cocktails);
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


// Delete a cocktail

router.delete("/delete/:id", validateSession, async(req, res) => {
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
        console.log(err.message)
    }

    res.json(message)

})

module.exports = router
