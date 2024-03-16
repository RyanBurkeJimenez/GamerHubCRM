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
    },
    isAdmin:{
        type: Boolean,
        default: false //Defaulted to false since not every employee is admin
    }
 }, {collection: 'Employees'});

module.exports = mongoose.model('Employee', employeeSchema);