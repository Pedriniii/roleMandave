const express = require('express');
const cadastrarRecebimento = require('../Controllers/Recebimentos/create');
const {listarRecebimentos, extratoRecebimentos, saldoEmConta} = require('../Controllers/Recebimentos/read');
const deleteRecebimento = require('../Controllers/Recebimentos/delete');
const verificarLogin = require('../Middlewares/authLogin.js');


const rotasRecebimentos = express();

rotasRecebimentos.post('/cadastrarRecebimento', cadastrarRecebimento);
rotasRecebimentos.get('/listarRecebimentos', listarRecebimentos);
rotasRecebimentos.get('/extratoRecebimentos', extratoRecebimentos);
rotasRecebimentos.get('/saldoEmConta', saldoEmConta);
rotasRecebimentos.delete('/deleteRecebimento', deleteRecebimento);


module.exports = rotasRecebimentos
