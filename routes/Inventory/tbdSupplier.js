const express = require('express')
router = express.Router()

router.get('/', (req,res) => {
    res.render('tbdSupplier')
}) 

module.exports = router