// from Justin's example - tests to verify db connection  //

let express = require('express')
let router = express.Router()

router.get("", (req,res) => {
    res.send("Hello World!")
})

module.exports = router

// from Justin's example - tests to verify db connection  //
