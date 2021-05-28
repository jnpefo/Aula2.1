// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   user: 'franco',
//   password: 'Trybe123*',
//   host: 'localhost',
//   database: 'model_example'
// });

// module.exports = connection;
// conexão com mysql

const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
    .connect(MONGO_URL, {
      ulrNewParser: true,
      useUnifiedTopology: true,
    })
    .the((conn) => conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit();
    });
};
