const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];



function studentAverage() {
  const result = students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((soma, array) => soma + array) / grades[index].length
  }));
  console.log(result);
  return result
}

assert.deepStrictEqual(studentAverage(), expected); 
