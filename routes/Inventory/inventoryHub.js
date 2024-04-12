const express = require('express')
const mongoose = require('mongoose')
const Inventory = require('../../models/inventory')
const router = express.Router()

router.get('/', async (req,res)=>{
    try{
    const inv = await Inventory.find()
    const newInv = await Inventory.findOne().sort({createdAt: -1})
    res.render('Inventory/InventoryHub', {inv,newInv})
    }
    catch(error){
        console.error('faild to load in Inventory Data', error)
        res.status(500).send('Internal Server error')
    }
})

module.exports = router;