const express = require('express');
const cadastrarPessoas  = require('../Controllers/Pessoas/create.js');
const listarPessoas = require('../Controllers/Pessoas/read.js')
// const atualizarPessoa = require('../Controllers/Pessoas/update.js')

const rotasPessoas = express();

rotasPessoas.post('/cadastrarPessoas', cadastrarPessoas);
rotasPessoas.get('/listarPessoas', listarPessoas);
// rotas.put('/atualizarPessoa/:id', atualizarPessoa)

module.exports = rotasPessoas
