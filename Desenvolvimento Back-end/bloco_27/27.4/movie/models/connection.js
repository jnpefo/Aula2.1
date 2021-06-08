const { MongoClient } = require("mongodb");

const MONGO_BD_URL = 'mongodb://127.0.0.1:27017'

let schema = null;

const connection = async () => {
  if(schema) return Promise.resolve(schema);

  return MongoClient
    .connect(MONGO_BD_URL, {
      useNewUrlParser: true,
      useUifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit('1');
    });
}

module.exports = connection;
