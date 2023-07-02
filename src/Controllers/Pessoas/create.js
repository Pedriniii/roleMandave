const conn = require ('../../Connections/db.js');

const cadastrarPessoas = async (res, req) => {
    const dados = conn('*').from('Pessoas')
    return res.json(dados)
}

module.exports = cadastrarPessoas;