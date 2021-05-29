const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'franco',
  password: 'Trybe123*',
  database: 'rest_exercicios'
});

module.exports = connection;
