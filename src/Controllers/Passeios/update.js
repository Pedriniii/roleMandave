const conn = require("../../Connections/db");

const atualizarPasseio = async (req, res) => {
    const {id, descricao, qtd_max_pessoas } = req.body;

    try{
    await conn('passeios')
     .update({
       descricao: descricao,
       qtd_max_pessoas: qtd_max_pessoas,
     })
     .where({id})

     return res.status(200).json({ mensagem: 'Passeio atualizado com sucesso' });
    }catch(error){
      console.error(error);
      res.status(500).json({ error: 'Ocorreu um erro ao atualizar o registro.' });
    }

}

module.exports = atualizarPasseio