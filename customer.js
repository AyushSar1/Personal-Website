const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const customerModel = mongoose.model("customer", customerSchema)
module.exports = customerModel;