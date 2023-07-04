const conn = require("../../Connections/db.js");
const jwt = require('jsonwebtoken');

const cadastrarPasseio = async (req, res) => {
  const { descricao, valor_recebido, qtd_max_pessoas, qtd_atual_pessoas } =
    req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ mensagem: "Não autorizado" });
  }

  const token = authorization.split(" ")[1];
  const id_pessoa = jwt.verify(token, process.env.JWT_PASSWORD);

  try {
    const [novoRegistro] = await conn("passeios")
      .insert({
        descricao,
        valor_recebido,
        qtd_max_pessoas,
        qtd_atual_pessoas,
      })
      .returning("id");

    const id_passeio = novoRegistro.id;

    if (id_passeio) {
      await conn("pessoas_passeios").insert({
        id_pessoa: id_pessoa,
        id_passeio: id_passeio,
      });
    }

    res.json({ message: "Registro inserido com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocorreu um erro ao inserir o registro." });
  }
};

module.exports = cadastrarPasseio;
