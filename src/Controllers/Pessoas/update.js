const conn = require ('../../Connections/db.js')

const atualizarPessoa = async (req, res) => {
    const { id, nome, senha } = req.body;

   conn('pessoas')
  .where({id})
  .update({
    nome: nome,
    apelido: apelido,
    senha: senha
    // thisKeyIsSkipped: undefined
  })
}

module.exports = atualizarPessoa