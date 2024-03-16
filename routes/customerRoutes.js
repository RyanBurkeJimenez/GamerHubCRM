const express = require('express')
const Customer = require('../models/customer')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/', (req,res) => {
    res.render('createCustomer')
})

router.post('/',async (req,res) =>{

    const confirmation = req.body.confirm === 'on';
    try{
        const newCust = new Customer({
            firstname: req.body.fname,
            lastname: req.body.lname,
            email: req.body.email,
            confirmation: confirmation
        })
    await newCust.save()
    console.log('New customer added to database!')
    res.redirect('/CDM')
    }catch(error){
        console.error("Failed to add customer", error)
    }
})

module.exports = router;