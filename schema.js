const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
 
    email: {
        type: String
    },
    age: {
        type: Number
    },
     firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)

