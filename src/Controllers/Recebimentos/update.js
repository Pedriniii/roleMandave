const conn = require("../../Connections/db");

const atualizarRecebimento = async (req, res) => {
    const { id, valor_pago } = req.body;

    try{
    await conn('recebimentos')
     .update({
       descricao: valor_pago,
     })
     .where({id})

     return res.status(200).json({ mensagem: 'Recebimento atualizado com sucesso' });
    }catch(error){
      console.error(error);
      res.status(500).json({ error: 'Ocorreu um erro ao atualizar o registro.' });
    }

}

// NAO TO MUITO AFIM DE DEIXAR UM UPDATE PARA ISSO, VOU DEIXAR COMENTADO POR ENQUANTO
// module.exports = atualizarRecebimento