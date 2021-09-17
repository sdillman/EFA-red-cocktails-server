//
// to use as a template for this server refactor ONLY
//
let express = require('express')
let router = express.Router()
const { Comment, User } = require('../models')

router.post("/create/", async(req, res) => {
    let message;

    try{
        let u = await User.findOne({ where: { id: req.body.id } })
        if (u) {
            let comment = await Comment.create({ content: req.body.content })
            await u.addComment(comment)

            let { id, content } = await Comment.findOne({ where: { id: comment.id } })
            message = { message: "Comment made!", data: { id, content }}    
        }
        else {
            message = { message: "Can't make a comment; user does not exist", data: null }
        }

    } catch(err) {
        message = { message: "Comment Create Failed" }
    }

    res.json(message)

})

router.get("/all/:id", async(req, res) => {
    let u = await User.findOne({ where: { id: req.params.id }})
    let comments = u ? await u.getComments() : null
    if (comments){
        let cleaned_comments = comments.map( p => {
                    const { id, content } = p
                    return { id, content }
        })

        res.send(cleaned_comments)
    }
    else
        res.send(comments)
})

module.exports = router
