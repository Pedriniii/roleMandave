const express = require('express');
const { login }  = require('../Controllers/Login/login.js');

const rotasLogin = express();

rotasLogin.post('/loginAuth', login);



module.exports = rotasLogin
