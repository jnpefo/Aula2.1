Agora, a prática
Antes de começar, crie um novo projeto chamado hello-jwt utilizando o comando npm init @tryber/backend hello-jwt , aceitando as opções padrão.
Crie um endpoint POST /login
O endpoint deve receber os seguintes dados no corpo da requisição:
Copiar
{
  "username": "someUsername",
  "password": "somePassword"
}
Caso username e password sejam válidos, retorne um token que atenda às seguintes especificações:
Expira em uma hora;
Contém, no payload, o nome de usuário informado na request;
Contém, no payload, uma propriedade admin , com o valor false .
Para retornar o token, utilize o seguinte formato no corpo da resposta:
Copiar
{
  "token": "<JWT aqui>"
}
Para que username seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres.
Para que password seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres.
Altere o endpoint POST /login :
Caso username seja admin e password seja s3nh4S3gur4??? , a chave admin no payload do token gerado deve ter o valor true
Crie o endpoint /GET /users/me
O endpoint só pode ser acessado por pessoas autenticadas
Para realizar a autenticação, a requisição deve conter o header Authorization , cujo valor deve ser um token válido
Caso o token não exista, retorne o status 401 Unauthorized , com o seguinte corpo da resposta:
Copiar
{
  "error": {
    "message": "Token not found"
  }
}
Caso aconteça um erro ao validar o token, retorne o status 401 Unauthorized com o seguinte conteúdo no corpo:
Copiar
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
Caso o token seja válido, retorne o status 200 OK e, no corpo da resposta, o nome de usuário ao qual aquele token pertence e o valor da propriedade admin , no seguinte formato:
Copiar
{
  "username": "nome de usuario do token",
  "admin": true || false
}
Utilize um middleware exclusivo para a autenticação. Armazene-o no arquivo middlewares/auth.js
Crie o endpoint /GET /top-secret
O endpoint só pode ser acessado por pessoas autenticadas.
Apenas tokens contendo, no payload, a propriedade admin com o valor true podem acessar esse endpoint.
Caso o token não exista, retorne o status 401 Unauthorized , com o seguinte corpo da resposta:
Copiar
{
  "error": {
    "message": "Token not found"
  }
}
Caso aconteça um erro ao validar o token, retorne o status 401 Unauthorized com o seguinte conteúdo no corpo:
Copiar
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
Caso o token seja válido, mas a propriedade admin do payload não seja true , retorne o status 403 Forbidden e o seguinte JSON:
Copiar
{
  "error": {
    "message": "Restricted access"
  }
}
Caso o token seja válido e o payload contenha admin com o valor true , retorne o seguinte JSON:
Copiar
{
  "secretInfo": "Peter Parker é o Homem-Arannha"
}
Para validar se a pessoa é admin, crie um novo middleware no arquivo middlewares/admin.js 
