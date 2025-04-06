const express = require('express')
const router = express.Router()
const userView = require('../views/userViews')

router.get('/getAllUsers', userView.getAllUsersView)

module.exports = router
