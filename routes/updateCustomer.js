const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
router.get('/', async(req,res) =>{
    try{
        const customers = await Customer.find()
        res.render('updateCustomer', {customers})
    }catch(error){
        console.error('failure to load page', error)
    }
})
module.exports = router;