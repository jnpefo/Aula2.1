const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const products = await db.collection('products').find().toArray();
  return products;
}

const getById = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) return null;
  return db.collection('products').findOne(ObjectId(id));
}

const add = async (name, brand) => {
  const db = await connection();
  const addProduct = await db.collection('products').insertOne({ name, brand });
  return addProduct;
}

const exclude = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) return null;
  const products = await getById(id);
  await db.collection('products').deleteOne({ _id: ObjectId(id) });
  return products;
}

const update = async (id) => {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  const products = await db.collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: name, brand });
  if (!products) return add(name, brand);
  return products;
}

module.exports = { add, getAll, getById, update, exclude };
