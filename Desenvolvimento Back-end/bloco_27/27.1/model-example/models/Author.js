const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName =  [firstName, middleName, lastName].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = (authorData) => {
  return { 
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}
const getAll = async () => {
  const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return result.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const query = 'SELECT first_name, middle_name, last_name, FROM model_example.authors WHERE id = ?';
  const [ authorData ] = await connection.execute(query, [id]);

  if(!authorData) return null;

  const { firstName, middleName, lastName } = convertFields(authorData[0]);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if(!firstName || typeof firstName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;
  if(!middleName || typeof middleName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
  [firstName, middleName, lastName]
);
module.exports = {
  getAll,
  findById,
  create,
  isValid,
};
