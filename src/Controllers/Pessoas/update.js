const conn = require ('../../Connections/db.js')
const jwt = require('jsonwebtoken');

const atualizarPessoa = async (req, res) => {
    const {nome, email, senha } = req.body;
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    const token = authorization.split(' ')[1];
    const id = jwt.verify(token, process.env.JWT_PASSWORD);

    try{
    await conn('pessoas')
     .update({
       nome: nome,
       email: email,
       senha: senha
     })
     .where({id})

     return res.status(200).json({ mensagem: 'Pessoa atualizada com sucesso' });
    }catch(error){
      console.error(error);
      res.status(500).json({ error: 'Ocorreu um erro ao atualizar o registro.' });
    }

}

module.exports = atualizarPessoa