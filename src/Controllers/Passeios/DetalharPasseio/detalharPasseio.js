const conn = require("../../../Connections/db.js");

const detalharPasseio = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const detalhePasseio = await conn("pessoas")
      .join("pessoas_passeios", "pessoas_passeios.id_pessoa", "=", "pessoas.id")
      .join("passeios", "passeios.id", "=", "pessoas_passeios.id_passeio")
      .join("recebimentos", function () {
        this.on("recebimentos.id_pessoa", "=", "pessoas.id").andOn(
          "recebimentos.id_passeio",
          "=",
          "pessoas_passeios.id_passeio"
        );
      })
      .select(
        "passeios.descricao",
        "pessoas.nome",
        conn.raw("MAX(recebimentos.data_recebimento) as data_recebimento"), // Usando .raw() para agregação
        "passeios.qtd_max_pessoas",
        "passeios.qtd_atual_pessoas"
      )
      .sum("recebimentos.valor_pago")
      .where("passeios.id", "=", id)
      .groupBy("passeios.descricao")
      .groupBy("pessoas.nome")
      .groupBy("passeios.qtd_max_pessoas")
      .groupBy("passeios.qtd_atual_pessoas");

    return res.json({ detalhePasseio });
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: error });
  }
};
module.exports =  detalharPasseio;
