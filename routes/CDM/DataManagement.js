const express = require('express')
const router = express.Router()
const Customer = require('../../models/customer')

router.get('/', async (req, res) => {
    try{
    const customers = await Customer.find()
    const newestCustomer = await Customer.findOne().sort({ createdAt: -1 });
    res.render('CDM/DataManagement', {customers, newestCustomer})
    }catch(error){
        console.error('failed to load in Customer Data Management Center', error)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router; 