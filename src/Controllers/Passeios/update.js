const conn = require("../../Connections/db");

const atualizarPasseio = async (req, res) => {
    const {id, descricao, qtd_max_pessoas, data_inicio, data_fim } = req.body;

    try{
    await conn('passeios')
     .update({
       descricao: descricao,
       qtd_max_pessoas: qtd_max_pessoas,
       data_inicio: data_inicio,
       data_fim: data_fim
     })
     .where({id})

     return res.status(200).json({ mensagem: 'Passeio atualizado com sucesso' });
    }catch(error){
      console.error(error);
      res.status(500).json({ error: 'Ocorreu um erro ao atualizar o registro.' });
    }

}

module.exports = atualizarPasseio