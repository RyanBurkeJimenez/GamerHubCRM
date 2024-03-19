const express = require('express')
const router = express.Router()
const Customer = require('../../models/customer')
router.get('/', async(req,res) =>{
    try{
        const customers = await Customer.find()
        res.render('CDM/updateCustomer', {customers})
    }catch(error){
        console.error('failure to load page', error)
    }
})
//GET route to render the edit customer page
router.get('/edit/:id', async (req,res) => {
    try{
        const customer = await Customer.findById(req.params.id)
        res.render('CDM/updateInfo', { customer });
    }catch(error){
        console.error('Error editing customer information', error)
        res.status(500).send('Internal Server Error')
    }
})

router.post('/edit/:id', async (req,res) => {
    try{
        await Customer.findByIdAndUpdate(req.params.id, req.body);
        res.render('success');
    }catch(error){
        console.error('Error Editing Customer Information', error)
        res.status(500).send('Internal Server Error')
    }
})

router.get('/delete/:id', async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.render('CDM/deleteInfo');
    } catch (error) {
        console.error('Failed to delete customer:', error);
        res.status(500).send('Internal Server Error');
    }
})
module.exports = router;