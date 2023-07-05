const conn = require("../../Connections/db");

async function deleteRecebimento(req, res) {
  const { id } = req.body;

  try {
    await conn("recebimentos")
      .where({
        id: id,
      })
      .del();

    return res
      .status(200)
      .json({ mensagem: "Recebimento excluido com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocorreu um erro ao excluir o registro." });
  }
}

module.exports = deleteRecebimento;
