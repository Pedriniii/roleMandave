const conn = require ('../../Connections/db.js');

const cadastrarPasseio = async (req, res) => {
 const { descricao, valor_a_pagar, valor_recebido, qtd_max_pessoas, qtd_atual_pessoas } = req.body;
 
  // if (!NOME || !APELIDO || !USUARIO || !SENHA) {
  //   return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  // }

  try {
    const novoRegistro = await conn('passeios').insert({
      descricao,
      valor_a_pagar,
      valor_recebido,
      qtd_max_pessoas,
      qtd_atual_pessoas
    })

    res.json({ message: 'Registro inserido com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao inserir o registro.' });
  }
};



module.exports = cadastrarPasseio;