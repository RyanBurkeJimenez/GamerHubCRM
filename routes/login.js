const express = require('express')
const router = express.Router()

const users = []

router.get('/', (req,res) =>{
    res.render('login')
})


router.post('/', async (req, res) =>{
    try{
        users.push({
            id: req.body.id,
            password: req.body.password
        })
        res.render('DataManagement') /*successful login will redirect to next page */
        console.log('Logged in successfully')
    }
    catch{
        res.redirect('/IThelp')
    }
    console.log(users)
})

module.exports = router;