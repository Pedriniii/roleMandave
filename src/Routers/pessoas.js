const express = require('express');
const cadastrarPessoas  = require('../Controllers/Pessoas/create.js');

const rotas = express();

rotas.get('/cadastrar', cadastrarPessoas);

module.exports = rotas
