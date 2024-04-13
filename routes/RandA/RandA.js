const express = require('express')
const Customer = require('../../models/customer')
const router = express.Router()

router.get('/', async (req,res)=>{
    try{
        const customers = await Customer.find()
    res.render('RandA/RandA',{customers})
}
    catch(error){
        console.error('faild to load in Inventory Data', error)
        res.status(500).send('Internal Server error')
    }
})

module.exports = router;