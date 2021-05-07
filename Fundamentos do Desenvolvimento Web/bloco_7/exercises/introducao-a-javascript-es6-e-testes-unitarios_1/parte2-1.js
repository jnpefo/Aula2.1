// const fatorial = (num) => {
//   let result = 1;
//   for (num; 0 < num; num -= 1) {
//     result *= num;
//   }
//   console.log(result);
// }

// fatorial(0);

const fatorial = (num) => num > 1 ? num * fatorial(num - 1) : num = 1;

console.log(fatorial(5));
