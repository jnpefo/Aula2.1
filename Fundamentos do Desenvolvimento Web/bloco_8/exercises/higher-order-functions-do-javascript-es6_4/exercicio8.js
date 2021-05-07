const assert = require('assert')

const greet = (name, msg = "Hi") => `${msg} ${name}`

assert.strictEqual(greet("John"), "Hi John")
assert.strictEqual(greet("John", "Good morning"), "Good morning John")
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")

console.log(greet("John"));
console.log(greet("John", "Good morning"));
console.log(greet("Isabela", "Oi"));

// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .