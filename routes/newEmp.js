const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const emp = []
router.get('/', (req,res) =>{
    res.render('newEmp')
})


router.post('/', async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword)
        emp.push({
            fname: req.body.fname,
            lname: req.body.lname,
            id: req.body.id,
            password: req.body.password
        })
       
        res.render('success') /*successful login will redirect to next page */
    }
    catch{
        res.redirect('/help')
    }
    console.log(emp)
})

module.exports = router;