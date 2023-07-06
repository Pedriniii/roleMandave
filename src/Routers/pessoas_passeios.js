const express = require('express');
const verificarLogin = require('../Middlewares/authLogin');
const addNewPessoa = require('../Controllers/PessoasPasseios/addNewPessoa');

const rotasPasseios = express();

// rotas.post('/cadastrarPasseios', cadastrarPasseios);
rotasPasseios.post('/addNewPessoa' ,verificarLogin , addNewPessoa);



module.exports = rotasPasseios
