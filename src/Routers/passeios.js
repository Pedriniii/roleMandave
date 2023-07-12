const express = require('express');
const cadastrarPasseio = require('../Controllers/Passeios/create')
const {listarPasseios, detalharPasseio}  = require('../Controllers/Passeios/read');
const atualizarPasseio = require('../Controllers/Passeios/update');
const verificarLogin = require('../Middlewares/authLogin');

const rotasPasseios = express();

// rotas.post('/cadastrarPasseios', cadastrarPasseios);
rotasPasseios.get('/listarPasseios', listarPasseios);
rotasPasseios.get('/detalharPasseio', detalharPasseio);
rotasPasseios.post('/cadastrarPasseio', cadastrarPasseio);
rotasPasseios.put('/atualizarPasseio', atualizarPasseio);


module.exports = rotasPasseios
