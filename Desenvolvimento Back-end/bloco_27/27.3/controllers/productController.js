const express = require('express');
// const { add, getAll, getById, update, exclude } = require('../models/productModelMySql');
const { add, getAll, getById, update, exclude } = require('../models/productModelMongo');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await getAll();
  return res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const products = await getById(req.params.id);

  if (products === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  return res.status(200).json(products);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  console.log("entrei aqui", name);
  try {
    const newProduct = await add(name, brand);

    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await exclude(req.params.id);

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await update(req.params.id , name, brand);
  } catch (err) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
})

module.exports = router;
