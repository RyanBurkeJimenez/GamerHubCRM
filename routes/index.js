/*Index.js serves as the base for the routes of the application. Routes will be placed in their own seperate routing files for clarity and MVC architecture */
const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.render('home.ejs')
})

module.exports = router;