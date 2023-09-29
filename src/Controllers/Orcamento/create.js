const conn = require("../../Connections/db");
const jwt = require("jsonwebtoken");


const cadastrarOrcamento = async (req, res) => {
    const { id_passeio, descricao, unidade_de_medida, qtd, valor, total } = req.body;
    // const { authorization } = req.headers;

    // if (!authorization) {
    //   return res.status(401).json({ mensagem: "Não autorizado" });
    // }
  
    try {
      const novoRegistro = await conn("orcamentos")
        .insert({
          id_passeio: '1',
          descricao,
          unidade_de_medida,
          qtd,
          valor,
          total: qtd * valor
        }) 
      res.json({ message: "Registro inserido com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocorreu um erro ao inserir o registro." });
    }
  };
  
  module.exports = cadastrarOrcamento;
  