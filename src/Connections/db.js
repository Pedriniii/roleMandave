const knex = require('knex');

// const connection = knex({
//   client: 'pg',
//   connection: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
//   }
// });

// // Testar a conexão com o banco de dados
// connection.raw('SELECT 1')
//   .then(() => {
//     console.log('Conexão bem-sucedida com o banco de dados!');
//   })
//   .catch((error) => {
//     console.error('Erro ao conectar ao banco de dados:', error);
//   });  


const connection = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
  pool: {
    min: 2,
    max: 10
}
});

module.exports = connection;