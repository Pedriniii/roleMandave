require('dotenv').config();
const express = require('express');
const rotasPessoas = require('./Routers/pessoas.js');
const rotasPasseios = require('./Routers/passeios.js');
const rotasLogin = require('./Routers/login.js');
const rotasRecebimentos = require('./Routers/recebimentos.js');
const rotasPessoasPasseios = require('./Routers/pessoas_passeios.js');
const rotasOrcamentos = require('./Routers/orcamentos.js')

const cors = require('cors')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://rolemandave-frontend.netlify.app');
    next();
  });


app.use(express.json());

//Rotas
app.use(rotasLogin);
app.use(rotasPessoas);
app.use(rotasPasseios);
app.use(rotasRecebimentos);
app.use(rotasPessoasPasseios);
app.use(rotasOrcamentos);

const portaAPI = '8080';

app.listen(portaAPI , () => {
    console.log('Servidor rodando na porta: ' + portaAPI);
});
