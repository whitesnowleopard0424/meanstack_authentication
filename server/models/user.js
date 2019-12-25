const mongoDB = require('../config/mongoDB')

const user = mongoDB.Schema({
    email : {
        type: String,
        required: [true, "email is required"]
    },
    password : {
        type: String,
        required: [true, "password is required"]
    }
})


module.exports = mongoDB.model('User', user)