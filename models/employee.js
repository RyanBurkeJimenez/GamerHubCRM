const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Employee', customerSchema);