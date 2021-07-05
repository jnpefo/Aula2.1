const axios = require('axios');

/* Faz uma requisição do tipo GET */
axios
  .get('http://localhost:3000/ping/')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })
  .catch((error) => {
    console.log(error);
  });

// axios.get('http://localhost:3000/user', {
//   params: {
//     ID: 12345
//   }
// })
// .then((response) => {
//   console.log(response);
// })
// .catch((error) => {
//   console.log(error);
// })

// const body = {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// };

// axios.post('/user', body)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

