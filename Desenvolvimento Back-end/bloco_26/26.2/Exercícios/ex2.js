const promises = require('./ex1');

const aleatorio = () => {
  const arrayAl = [];
  for (let index = 0; index < 3; index++) {
  arrayAl.push(Math.floor(Math.random() * 100));
  }
  return arrayAl;
};

// console.log(aleatorio()); 

// promises(...aleatorio())
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message))

const tryCatch = async () => {
  try {
    const result = await promises(...aleatorio());
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
  
tryCatch();
