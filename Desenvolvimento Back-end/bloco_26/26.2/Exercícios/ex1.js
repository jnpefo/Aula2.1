const promises = (p1, p2, p3) => {
  return new Promise((resolve, reject) => {
    if( typeof(p1 && p2 && p3) !== 'number' ) {
      return reject (new Error("Informe apenas números"));
    };
    const result = ( (p1 + p2) * p3 );

    if(result < 50) {
      return reject (new Error("Valor muito baixo"));
    };
  
    resolve(result);
  });
  

};

// promises('um', 'dois', 'três');
// promises(1,2,3);

module.exports = promises;

