const jwt = require('jsonwebtoken')
// const User = require('../models/user')
const config = require('../config/config')
const userSvc = {}

module.exports = userSvc

userSvc.verifyUser = function(req, res, next){
    if(!req.headers.authorization) {
        return res.status(401).send('authorization header not found')
    }
    let token = req.headers.authorization
    if(token === 'null') {
        return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, config.secretKey)
    if(!payload) {
        return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
}

userSvc.profile = function(req, res){
    let profile = {
        username: "vinay",
        age: "21",
        job: "hacker"
    }
    res.status(200).send(profile)
}