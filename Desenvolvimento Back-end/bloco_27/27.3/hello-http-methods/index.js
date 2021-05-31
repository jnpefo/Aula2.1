const fetch = require('node-fetch');

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json',
});

const body = JSON.stringify({
  name: 'Trybe',
  email: 'trybe@betrybe.com',
  password: 'Tr1b3r',
});

// fetch('https://postman-echo.com/get?param1=teste', {
fetch('https://postman-echo.com/post?param1=teste', {
  headers,
  method: 'POST',
  body,
})
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((erroOrResponse) => {
    if (erroOrResponse.status) {
      return console.error(`Request failed with status ${erroOrResponse.status}`);
    }

    console.error(erroOrResponse);
  })
