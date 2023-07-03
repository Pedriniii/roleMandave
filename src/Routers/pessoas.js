const express = require('express');
const cadastrarPessoas  = require('../Controllers/Pessoas/create.js');
const listarPessoas = require('../Controllers/Pessoas/read.js');
const verificarLogin = require('../Middlewares/authLogin.js');
const { verificarRequisicao } = require('../Middlewares/verificarRequisicao.js')
const { SchemaCadastrarPessoas } = require('../Schemas/Pessoas/cadastro.js')

const rotasPessoas = express();

rotasPessoas.post('/cadastrarPessoas',verificarRequisicao(SchemaCadastrarPessoas), cadastrarPessoas);
rotasPessoas.get('/listarPessoas', verificarLogin, listarPessoas);

module.exports = rotasPessoas
