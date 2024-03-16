const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true
    },
    confirmation:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date, 
        default: Date.now
    }
}, {collection: "Customers"})

module.exports = mongoose.model("Customer", customerSchema);
