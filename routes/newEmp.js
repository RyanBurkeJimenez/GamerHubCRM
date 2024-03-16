const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Employee = require('../models/employee')
const router = express.Router()

router.get('/', (req,res) =>{
    res.render('newEmp')
})


router.post('/', async (req, res) =>{
    try{
        //Hash the password before sending to database
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword)
        const newEmployee = new Employee({
            firstname: req.body.fname,
            lastname: req.body.lname,
            id: req.body.id,
            password: hashedPassword
        })
       await newEmployee.save() //send and save the new employee to the database
        res.render('success') /*successful login will redirect to next page */
    }
    catch(error){
        console.error('Error creating employee', error);
        res.render('fail')
    }
})

module.exports = router;