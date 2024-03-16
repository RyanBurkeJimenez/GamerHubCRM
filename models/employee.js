const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    password:{
        type:String,
        required: true
    }
 }, {collection: 'Employees'});

module.exports = mongoose.model('Employee', employeeSchema);