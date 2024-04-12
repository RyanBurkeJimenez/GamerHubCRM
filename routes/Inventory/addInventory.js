const express = require('express')
const Customer = require('../../models/inventory')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/', (req,res) => {
    res.render('Inventory/addInventory')
})

router.post('/',async (req,res) =>{
    try{
        const newInv = new Customer({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
            id: req.body.id
        })
    await newInv.save()
    console.log('New item added to database!')
    res.redirect('/Inventory')
    }catch(error){
        console.error("Failed to add inventory", error)
    }
})

module.exports = router;