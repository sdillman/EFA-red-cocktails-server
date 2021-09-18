let express = require('express')
let router = express.Router()
let validateSession = require("../middleware/validateSession");
const { Comment, User } = require('../models')

router.post("/create/", validateSession, async(req, res) => {
    let message;

    try{
        let u = await User.findOne({ where: { id: req.user.id } })

        if (u) {
            let comment = await Comment.create({ content: req.body.comment.content, cocktail_id: req.body.comment.cocktail_id })
            await u.addComment(comment)

            let { id, content } =  comment;
            message = { message: "Comment made!", data: { id, content }}    
        }
        else {
            message = { message: "Can't make a comment; user does not exist", data: null }
        }

    } catch(err) {
        message = { message: "Comment Create Failed", err }
        console.log(err)
    }

    res.json(message)

})





// router.get("/all/:id", async(req, res) => {
//     let u = await User.findOne({ where: { id: req.params.id }})
//     let comments = u ? await u.getComments() : null
//     if (comments){
//         let cleaned_comments = comments.map( p => {
//                     const { id, content } = p
//                     return { id, content }
//         })

//         res.send(cleaned_comments)
//     }
//     else
//         res.send(comments)
// })

module.exports = router
