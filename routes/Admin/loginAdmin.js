const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const employee = require('../../models/employee')
const bcrypt = require('bcrypt')

router.get('/', (req,res) =>{
    res.render('Admin/loginAdmin')
})


router.post('/', async (req, res) =>{
    try{
        const emp = await employee.findOne({id: req.body.id});
    if (!emp){
        return res.status(400).send('Cannot find user')
    }

     if(await bcrypt.compare(req.body.password, emp.password)){
        if(emp.isAdmin === true){
        res.redirect('/newEmp') /*successful login will redirect to next page */
        console.log('Logged in successfully')}
        else {
            res.send('No Administrative Privileges')
         }
     }else {
        res.send('Not the correct credentials')
     }
       
    }
    catch(error){
        console.error('Error during login:', error)
    }
})

module.exports = router;