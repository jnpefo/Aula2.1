module.exports = {
  "development": {
    "username": "franco",
    "password": "Trybe123*",
    "database": "associations",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "franco",
    "password": "Trybe123*", // preencha com a senha do seu banco de dados, caso tenha
    "database": "orm_assoc_test_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    "logging": false
  },
  "production": {
    "username": "franco",
    "password": "Trybe123*",
    "database": "associations",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
