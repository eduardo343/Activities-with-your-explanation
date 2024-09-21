// Function Expression

// Basic function expression
// const sumar = function (numero, numero2) {
//     console.log(numero + numero2); // Logs the sum of the two parameters
// }
// sumar(40, 40); // Calls the function with arguments 40 and 40

// Function expression with default parameters
const sumar = function (numero = 0, numero2 = 0) {
    return numero + numero2; // Returns the sum of the two parameters
};

// Calling the function with a single argument
const resultado = sumar(40); // Calls the function with 40; 'numero2' defaults to 0
console.log(resultado); // Logs the result (40 + 0 = 40)
