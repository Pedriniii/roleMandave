const express = require('express');
const cadastrarOrcamento = require('../Controllers/Orcamento/create');
// middleware
const verificarLogin = require('../Middlewares/authLogin');

const rotasOrcamentos = express();


rotasOrcamentos.post('/cadastrarOrcamento',verificarLogin , cadastrarOrcamento);



module.exports = rotasOrcamentos
