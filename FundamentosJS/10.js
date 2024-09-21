// Destructuring Arrays
const tecnologias = ['Html', 'React', 'JavaScript', 'Node.js'];

// Destructuring with skipped elements
const [, , , JavaScript] = tecnologias; // Skips the first three elements and assigns the fourth to the variable 'JavaScript'.

// Note: The variable 'Nodejs' is not defined, so this will cause an error. It should be 'Node.js'.
// console.log(Nodejs); // This line will throw an error because 'Nodejs' is not declared.

// Uncommenting the following code demonstrates destructuring an object:

// const cliente = {
//     nombre: 'alan',
//     tipo: 'premium'
// };

// const { tipo } = cliente; // Destructures 'tipo' from the 'cliente' object.
// console.log(tipo); // Prints 'premium'.
