const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date, 
        default: Date.now
    }

},{collections: 'Inventory'})

module.exports = mongoose.model('Inventory',inventorySchema)