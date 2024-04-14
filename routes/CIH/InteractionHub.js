const express = require('express')
const router = express.Router()
const Customer = require('../../models/customer')

router.get('/', async (req,res)=>{
    try{
        const customers = await Customer.find()
    res.render('CIH/interactionHub', {customers})
    }
    catch(error){
        console.error('failed to load in Interaction Hub', error)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router;