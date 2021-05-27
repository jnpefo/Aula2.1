const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'franco',
  password: 'Trybe123*',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
