// Importa el módulo 'functions.js' y asigna su contenido al objeto 'functions'.
const functions = require(`./functions.js`);

// Muestra en la consola el objeto 'functions', que contiene las funciones importadas.
console.log(functions);
// Llama a la función 'add' del módulo 'functions' con los argumentos 5 y 3, e imprime el resultado.
console.log(functions.add(5, 3));
// Llama a la función 'substract' del módulo 'functions' con los argumentos 2 y 8, e imprime el resultado.
console.log(functions.substract(2, 8));
// Llama a la función 'multiply' del módulo 'functions' con los argumentos 2 y 8, e imprime el resultado.
console.log(functions.multiply(2, 8));
// Llama a la función 'divide' del módulo 'functions' con los argumentos 2, 0 y 9, e imprime el resultado.
console.log(functions.divide(2, 0, 9));
