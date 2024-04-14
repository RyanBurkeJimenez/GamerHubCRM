const express = require('express')
const router = express.Router()
const employee = require('../../models/employee')
const bcrypt = require('bcrypt')


router.get('/', (req,res) =>{
    res.render('CDM/login')
})


router.post('/', async (req, res) =>{
    try{
        const emp = await employee.findOne({id: req.body.id});
    if (!emp){
        return res.status(400).send('Cannot find user')
    }

     if(await bcrypt.compare(req.body.password, emp.password)){
       const user = {name: emp}
        res.redirect('/CDM') /*successful login will redirect to next page */
        console.log('Logged in successfully')
     }else {
        res.send('Not the correct credentials')
     }
       
    }
    catch(error){
        console.error('Error during login:', error)
    }
})
module.exports = router;