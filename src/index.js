require('dotenv').config();
const express = require('express');
const rotasPessoas = require('./Routers/pessoas.js');
const rotasPasseios = require('./Routers/passeios.js');
const rotasLogin = require('./Routers/login.js');
const rotasRecebimentos = require('./Routers/recebimentos.js');


const app = express();

app.use(express.json());

//Rotas
app.use(rotasLogin);
app.use(rotasPessoas);
app.use(rotasPasseios);
app.use(rotasRecebimentos);

const portaAPI = '8080';

app.listen(portaAPI , () => {
    console.log('Servidor rodando na porta: ' + portaAPI);
});
