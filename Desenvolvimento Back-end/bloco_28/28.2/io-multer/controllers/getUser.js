// // Você pode usar métodos async também
// const getUser = async () => {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
//   }

// module.exports = getUser;

module.exports = (_req, res) => {
  console.log('entrei aqui');
  res.status(200).json({ message: 'Pong! User 12345' });
};
