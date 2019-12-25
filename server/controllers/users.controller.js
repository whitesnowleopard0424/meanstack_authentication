const express = require('express')
const router = express.Router()
const authSvc = require('../services/auth.service')
const userSvc = require('../services/user.service')

router.post('/register', authSvc.register)

router.post('/login', authSvc.login)

router.post('/profile', userSvc.verifyUser, userSvc.profile)

module.exports = router