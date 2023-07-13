const conn = require("../../../Connections/db.js");

const orcamentoPasseio = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const detalheOrcamento = await conn("orcamentos")
    .where('id_passeio','=',id)
    return res.json({ detalheOrcamento });
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: error });
  }
};
module.exports =  orcamentoPasseio;
