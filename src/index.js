const express = require('express')
const rotasPessoas = require('./Routers/pessoas.js')
const rotasPasseios = require('./Routers/passeios.js')


const app = express()

app.use(express.json())

//Rotas
app.use(rotasPessoas)
app.use(rotasPasseios)

const portaAPI = '8080'

app.listen(portaAPI , () => {
    console.log('Servidor rodando na porta: ' + portaAPI);
})
