require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Definindo nossa pasta pública */
/* `app.use` com apenas um parâmetro quer dizer que
   queremos aplicar esse middleware a todas as rotas, com qualquer método */
/* __dirname + '/uploads' é o caminho da pasta que queremos expor publicamente */
/* Isso quer dizer que, sempre que receber uma request, o express vai primeiro
  verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
  Se for, o express envia o conteúdo desse arquivo e encerra a response.
   Caso contrário, ele chama `next` e permite que os demais endpoints funcionem */
app.use(express.static(__dirname + '/uploads'));
// app.use(express.static(__dirname + '/envios'));

  /* Cria uma instância do`multer`configurada. O`multer`recebe um objeto que,
      nesse caso, contém o destino do arquivo enviado. */
// const upload = multer({ dest: 'uploads' });
// const upload = multer({ dest: 'envios' });

/* No caso, vamos dar o nome que vem na
propriedade `originalname`, ou seja,
o mesmo nome que o arquivo tem no
computador da pessoa usuária */
const storage = multer.diskStorage({
destination: (_req, _file, callback) => {
  callback(null, 'uploads');
},
filename: (_req, file, callback) => {
  console.log(file.originalname);
  callback(null, file.originalname);
}});

const upload = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file }));

// app.post('/envios', upload.single('file'), (req, res) =>
//   res.status(200).json({ body: req.body, file: req.file }));

app.get('/user/:id', controllers.getUser);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
