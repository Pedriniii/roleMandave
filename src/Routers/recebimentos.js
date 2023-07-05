const express = require('express');
const cadastrarRecebimento = require('../Controllers/Recebimentos/create');
const listarRecebimentos = require('../Controllers/Recebimentos/read');
const deleteRecebimento = require('../Controllers/Recebimentos/delete');
const verificarLogin = require('../Middlewares/authLogin.js');


const rotasRecebimentos = express();

rotasRecebimentos.post('/cadastrarRecebimento',verificarLogin, cadastrarRecebimento);
rotasRecebimentos.get('/listarRecebimentos',verificarLogin, listarRecebimentos);
rotasRecebimentos.delete('/deleteRecebimento',verificarLogin, deleteRecebimento);


module.exports = rotasRecebimentos
