const conn = require("../../Connections/db");
const jwt = require("jsonwebtoken");


const updateOrcamento = async (req, res) => {
    const { id,descricao, unidade_de_medida, qtd, valor } = req.body;
    // const { authorization } = req.headers;

    // if (!authorization) {
    //   return res.status(401).json({ mensagem: "Não autorizado" });
    // }
  
    try {
      const putOrcamento = await conn("orcamentos")
        .where('id', '=', id)
        .update({
          descricao,
          unidade_de_medida,
          qtd,
          valor,
          total: qtd * valor
        }) 
    return res.status(200).json({ mensagem: 'Orçamento atualizado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocorreu um erro ao atualizar o registro." });
    }
  };
  
  module.exports = updateOrcamento;
  