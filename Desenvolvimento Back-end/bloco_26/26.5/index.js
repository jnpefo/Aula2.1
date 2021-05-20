const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

// Deve receber no campo status um boleano e alterar o status do usuário correspôndente. Se o campo status não for um boleano, deve retornar o error "status isn't a boolean". Caso nao exista usuário correspondente, deve rotornar o error "user isn't found".
const users = [
  {
    id: 1,
    user: 'marcos',
    isActive:true
  },
  {
    id: 2,
    user: 'paulo',
    isActive:true

  },
  {
    id: 3,
    user: 'roger',
    isActive:false
  }
]

app.put('/user/:id', (req, res, _next) => {
  const result = users.find((user) => user.id == req.params.id )
  const { status } = req.body
  if(result === undefined) {
    return res.status(404).json({ error: "user isn't found" })
  } 
  if(typeof status !== "boolean") {
    return res.status(400).json({ error: "status isn't a boolean" })
  } 
  result.isActive = status
  res.status(200).json({ result })
})


app.listen(3001, () => {
  console.log('listen on 3001');
})
