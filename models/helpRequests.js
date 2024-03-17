const mongoose = require('mongoose')

const helpSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    loginissue:{
        type: Boolean,
        default: false
    },
    compissue:{
        type:Boolean,
        default: false
    },
    otherissue:{
        type:Boolean,
        default: false
    },
    content: String,
    createdAt:{
        type: Date,
        default: Date.now()
    }

},{collections:'Tickets'})

module.exports = mongoose.model('Tickets',helpSchema)