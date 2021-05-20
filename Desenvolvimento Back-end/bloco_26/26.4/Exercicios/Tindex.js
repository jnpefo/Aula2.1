const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

// Req 1
app.get('/ping', (_req, res) => res.json({ "message": "Pong!" }))

// Req 2
app.post('hello', (_req, res) => {
  const { name } = 
  res.json({ "message": `Hello, ${name}!` })
})

app.use(function (err, _req, res, _ne) {
  res.status(500)
    .send(`Erro! Mensagem: ${err.message}`)
})

app.listen(3000, () => console.log('ouvindo na porta 3000!'))
