const express = require('express');
const loginUserRoute = express.Router();
const loginUserController = require('../controllers/loginUserController')

loginUserRoute.post('/',loginUserController.login);

module.exports = {
    loginUserRoute
}