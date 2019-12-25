const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('../config/config')
const authSvc = {}


module.exports = authSvc



//define functions

authSvc.register = function(req, res){
    let user = req.body
    User.find({email : user.email}, (err, data) => {
        if(err){
            throw err
        }else{
            if(data.length === 0){
                let newUser = new User({email: user.email})
                let token = authSvc.createToken(newUser._id)
                newUser.password = authSvc.createHash(user.password)
                newUser.save((err, data) => {
                    if(err){
                        throw err
                    }else{
                        res.send({token})
                    }
                }) 
            }else{
              res.send("already account exit")
            }
        }
    })
}

authSvc.login = function(req, res){
    let user = req.body
    User.findOne({email : user.email}, (err, dbUser) => {
        if(err){
            throw err
        }else{
            if(dbUser){
                if(bcrypt.compareSync(user.password, dbUser.password)){
                    let token = authSvc.createToken(dbUser._id)
                    res.status(200).send({ token })
                }else{
                    res.status(401).send("unauthorized")
                }
            }else{
                res.status(401).send("unauthorized")
            }
        }
    })
}

authSvc.createHash = function(password){
  return bcrypt.hashSync(password, 10)
}

authSvc.createToken = function(userId){
    return jwt.sign({ user: userId }, config.secretKey)
}
