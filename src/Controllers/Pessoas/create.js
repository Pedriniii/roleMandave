const conn = require ('../../Connections/db.js');

const cadastrarPessoas = async (req, res) => {
 const { nome, email ,apelido, senha } = req.body;

  console.log('o nome que eu queria por nessa porra é: ' + nome)

  try {
    const novoRegistro = await conn('pessoas').insert({
      nome,
      email,
      apelido,
      senha
    })

    res.json({ message: 'Registro inserido com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao inserir o registro.' });
  }
};



module.exports = cadastrarPessoas;