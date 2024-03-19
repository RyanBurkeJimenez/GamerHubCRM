const express = require('express')
const router = express.Router()
const Ticket = require('../../models/helpRequests')

router.get('/', (req,res) => {
    res.render('ITHelp/IThelp')
})

router.post('/', async (req,res) =>{
    try{
        const login = req.body.loginissue === 'on';
        const comp = req.body.compissue === 'on';
        const other = req.body.otherissue === 'on';
        const newTicket = new Ticket({
            id: req.body.id,
            name: req.body.name,
            loginissue: login,
            compissue: comp,
            otherissue: other,
            content: req.body.content

        })
        await newTicket.save()
        res.render('success')
    }catch(error){
        console.error("Failed to create ticket", error)
    }
})
module.exports = router;
