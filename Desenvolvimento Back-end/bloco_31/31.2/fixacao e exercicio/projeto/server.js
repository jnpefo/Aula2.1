const net = require('net');

const server = net.createServer((connection) => {
  connection.push(connection);

  console.log('Cliente conectado');

  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
  });
  
  connection.write('Mensagem do servidor!\r\n');
  
  
  connection.pipe(connection);

  countClient();
});

const countClient = () => {
  server.getConnections((err, count) => {
    console.log(count);
    console.log(err);
  });
};

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
