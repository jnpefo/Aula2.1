const express = require('express');
const app = express();
app.use(express.json())
const port = 3000;

const Aurthor = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
const authors = await Author.getAll();

res.status(200).json(author);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  
  const author = await Author.findById(id);
  
  if (!author) return res.status(404).json({ message: 'Not found' });
  
  res.status(200).json(author);
  });

app.get('/books', async (req, res) => {
  // const books = await Books.getAll();
  const { author_id } = req.query;
  const books = (author_id) 
    ? await Books.getByAuthorID(author_id)
    : await Books.getAll();

  res.status(200).json(books);
})

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(id);

  if(!book) return res.status(404).json({ message: 'Not found' })
})

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Aurthor.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso!' })
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if(!await Books.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados invalidos' });
  }
  await Books.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(port, () => console.log('Example app listening on 3000 port!'));
// parando
