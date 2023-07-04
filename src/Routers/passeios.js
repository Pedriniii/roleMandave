const express = require('express');
const cadastrarPasseio = require('../Controllers/Passeios/create')
const listarPasseios  = require('../Controllers/Passeios/read');
const atualizarPasseio = require('../Controllers/Passeios/update');
const verificarLogin = require('../Middlewares/authLogin');

const rotasPasseios = express();

// rotas.post('/cadastrarPasseios', cadastrarPasseios);
rotasPasseios.get('/listarPasseios',verificarLogin , listarPasseios);
rotasPasseios.post('/cadastrarPasseio',verificarLogin , cadastrarPasseio);
rotasPasseios.put('/atualizarPasseio',verificarLogin , atualizarPasseio);


module.exports = rotasPasseios
