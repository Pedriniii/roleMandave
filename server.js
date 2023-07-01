const express = require('express');
const Person = require('./person.model');

const app = express();
const port = 3000;

app.use(express.json());

// Rota para cadastrar uma nova pessoa
app.post('/api/people', async (req, res) => {
  try {
    const { nome, apelido, usuario, senha } = req.body;
    const person = await Person.create({ nome, apelido, usuario, senha });
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar pessoa' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
