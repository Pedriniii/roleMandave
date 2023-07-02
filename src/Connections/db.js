require('dotenv').config();
const knex = require('knex');

const connection = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  }
});

// Testar a conexão com o banco de dados
connection.raw('SELECT 1')
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });  


  
// const selectPessoas = async () => {
//   const response = await connection.select('*').from('pessoas');
//   console.log(response);
// };

// selectPessoas()

module.exports = connection;