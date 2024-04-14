const mongoose = require('mongoose')

const interactionSchema = new mongoose.Schema({
    message:{
        type: String,
        required:true
    },
    urgency:{
        type: String,
        required:true
    },
    launch_date:{
        type: Date,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }

},{collections:'Interactions'})

module.exports = mongoose.model('Interactions',interactionSchema)