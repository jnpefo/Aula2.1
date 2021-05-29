const connection = require('./connectionMySql');
const queryAdd = 'INSER INTO products (name, brand) VALUES (?, ?);';
const queryAll = 'SELECT * FROM products';
const queryId = 'SELECT * FROM products WHERE id = ?';
const queryUpdate = 'UPDATE products SET name = ?, brand = ? WHERE id = ?';
const queryDelet = 'DELETE FROM products WHERE id = ?';

const add = async (name, brand) => {
  try {
    const [result] = await connection.query(queryAdd, [name, brand]);
    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1)
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query(queryAll);
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query(queryId, [id]);
    if (!result.length) return null;
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query(queryUpdate, [name, brand, id])
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query(queryDelet, [id]);
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
