const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Employee = require('../../models/employee')
const router = express.Router()

router.get('/', (req,res) =>{
    res.render('Admin/newEmp')
})


router.post('/', async (req, res) =>{
    try{
        //Hash the password before sending to database
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const isAdmin = req.body.isAdmin === 'on';
        const newEmployee = new Employee({
            firstname: req.body.fname,
            lastname: req.body.lname,
            id: req.body.id,
            password: hashedPassword,
            isAdmin: isAdmin
        })
       await newEmployee.save() //send and save the new employee to the database
        res.render('success') /*successful login will redirect to next page */
    }
    catch(error){
        console.error('Error creating employee', error);
    }
})

module.exports = router;