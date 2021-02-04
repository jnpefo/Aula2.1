function techList(array, name) {
  if (array.length === 0) return 'Vazio!';

  const lista = array
    .sort()
    .map((technology) => ({
      tech: technology, name,
    }));
  return lista;
};

module.exports = techList;
