const express = require('express');
const cadastrarOrcamento = require('../Controllers/Orcamento/create');
// middleware
const verificarLogin = require('../Middlewares/authLogin');
const listarOrcamentos = require('../Controllers/Orcamento/read');

const rotasOrcamentos = express();


rotasOrcamentos.post('/cadastrarOrcamento', cadastrarOrcamento);
rotasOrcamentos.get('/listarOrcamento', listarOrcamentos);



module.exports = rotasOrcamentos
