const express = require('express');
const cadastrarPasseio = require('../Controllers/Passeios/create')
const listarPasseios  = require('../Controllers/Passeios/read');

const rotasPasseios = express();

// rotas.post('/cadastrarPasseios', cadastrarPasseios);
rotasPasseios.get('/listarPasseios', listarPasseios);
rotasPasseios.post('/cadastrarPasseio', cadastrarPasseio)


module.exports = rotasPasseios
