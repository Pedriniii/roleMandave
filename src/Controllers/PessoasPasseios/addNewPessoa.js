const conn = require("../../Connections/db");
const jwt = require("jsonwebtoken");


const addNewPessoa = async (req, res) => {
    const { id_pessoa, id_passeio } = req.body;
    const { authorization } = req.headers;


    if (!authorization) {
      return res.status(401).json({ mensagem: "Não autorizado" });
    }
  
    try {
      const novoRegistro = await conn("pessoas_passeios")
        .insert({
          id_pessoa,
          id_passeio,
        }) 
      res.json({ message: "Registro inserido com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocorreu um erro ao inserir o registro." });
    }
  };
  
  module.exports = addNewPessoa;
  