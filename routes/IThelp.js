const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('IThelp.ejs')
})

module.exports = router;
