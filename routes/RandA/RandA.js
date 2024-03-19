const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('RandA/RandA')
})

module.exports = router;