const express = require('express')
const router = express.Router()
const Interaction = require('../../models/interactionLogs')

router.get('/', (req,res)=>{
    res.render('CIH/InteractionHub2')
})


router.post('/', async (req,res) =>{
    try{
        const newInteraction = new Interaction({
        message: req.body.message,
        urgency: req.body.urgency,
        launch_date: req.body.launch_date
        })
        await newInteraction.save()
        console.log('New interaction added to database!')
        res.render('CIH/InteractionHub2')
    }
    catch(error){
    console.error('Error Editing Customer Information', error)
    res.status(500).send('Internal Server Error')
    }
})
module.exports = router;