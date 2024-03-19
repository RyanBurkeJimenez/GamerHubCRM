const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('Inventory/InventoryHub')
})

module.exports = router;