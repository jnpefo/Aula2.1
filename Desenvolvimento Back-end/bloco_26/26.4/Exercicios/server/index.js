const express = require('express')
const bodyParser = require('body-parser')
const middlewares = require('./middlewares')
const app = express()

// app.use(middlewares.logger)
app.use(bodyParser.json())

const people = [
  { id: 0,name: 'Thiago', age: 40 },
  { id: 1, name: 'Neto', age: 32 }
]

const searchPeople = (req, res, next) => {
  if(!req.query.name) return next()
  const result = people.filter(person => person.name.includes(req.query.name))
  return res.status(200).json(result)
}

const getAllPeople = (req, res, next) => {
  return res.status(200).json(people)
}

app.get('/people', searchPeople, getAllPeople)

app.post('/people', (req, res, next) => {
  const { name, age } = req.body
  const id = people.length

  people.push({id, name, age})

  res.status(201).json({id, name, age})
})

// app.all('/path', middlewares.auth, middlewares.dummy)
// com o all não deixa colocar outro caminhao depois do /path

// app.use(middlewares.error)

// app.use('/path', middlewares.dummy) por aqui perco o controle, mas server para atender qualquer requisição, exp: pode passar o token, menos um CRUD


// app.get('/path', middlewares.dummy)
// app.post('/path', middlewares.auth, middlewares.dummy)
// app.put('/path', middlewares.dummy)
// app.delete('/path', middlewares.dummy)

app.listen(3000, () => {
  console.log('listen on 3000');
})
