const express = require('express');
const cadastrarOrcamento = require('../Controllers/Orcamento/create');
const updateOrcamento = require('../Controllers/Orcamento/put')
// middleware
const verificarLogin = require('../Middlewares/authLogin');
const {listarOrcamentos, orcamentoTotal} = require('../Controllers/Orcamento/read');

const rotasOrcamentos = express();


rotasOrcamentos.post('/cadastrarOrcamento', cadastrarOrcamento);
rotasOrcamentos.get('/listarOrcamento', listarOrcamentos);
rotasOrcamentos.get('/orcamentoTotal', orcamentoTotal);
rotasOrcamentos.put('/updateOrcamento/:id', updateOrcamento);



module.exports = rotasOrcamentos
