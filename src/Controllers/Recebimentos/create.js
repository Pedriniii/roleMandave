const conn = require("../../Connections/db");
const jwt = require("jsonwebtoken");


const cadastrarRecebimento = async (req, res) => {
    const { id_passeio, id_pessoa, valor_pago, data_recebimento } = req.body;
    const { authorization } = req.headers;
    const timestampValue = new Date(); 

    if (!authorization) {
      return res.status(401).json({ mensagem: "Não autorizado" });
    }
  
    try {
      const novoRegistro = await conn("recebimentos")
        .insert({
          id_passeio,
          id_pessoa,
          valor_pago,
          data_recebimento,
          time_stamp: timestampValue
        }) 
      res.json({ message: "Registro inserido com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocorreu um erro ao inserir o registro." });
    }
  };
  
  module.exports = cadastrarRecebimento;
  