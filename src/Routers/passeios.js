const express = require('express');
const cadastrarPasseio = require('../Controllers/Passeios/create')
const listarPasseios  = require('../Controllers/Passeios/read');
const detalharPasseio  = require('../Controllers/Passeios/DetalharPasseio/detalharPasseio');
const orcamentoPasseio = require('../Controllers/Passeios/DetalharPasseio/orcamentoPasseio');
const atualizarPasseio = require('../Controllers/Passeios/update');
const verificarLogin = require('../Middlewares/authLogin');

const rotasPasseios = express();

// rotas.post('/cadastrarPasseios', cadastrarPasseios);
rotasPasseios.get('/listarPasseios', listarPasseios);
rotasPasseios.get('/detalharPasseio/:id', detalharPasseio);
rotasPasseios.get('/orcamentoPasseio/:id', orcamentoPasseio);
rotasPasseios.post('/cadastrarPasseio', cadastrarPasseio);
rotasPasseios.put('/atualizarPasseio', atualizarPasseio);


module.exports = rotasPasseios
