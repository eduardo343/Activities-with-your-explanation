// Functions - Function Declaration

// Simple function declaration
// function sumar() {
//     console.log(2 * 2); // Logs the result of 2 * 2
// }
// sumar(); // Calls the function

// Function with parameters
// Parameters are the variables in the function definition
// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero2); // Logs the second parameter
//     console.log(numero + numero2); // Logs the sum of both parameters
//     // console.log(numero + numero2 + numero3); // This will cause an error because 'numero3' is not defined
//     console.log(numero); // Logs the first parameter
//     console.log(numero2); // Logs the second parameter
//     // console.log(numero3); // This will also cause an error
// }

// Function calls with arguments
// sumar(10, 30); // Calls the function with arguments 10 and 30
// sumar(5, 5); // Calls the function with arguments 5 and 5
// sumar(10.5, 10.5); // Calls the function with decimal arguments
// sumar(); // Calls the function with default values (0, 0)

// Function returning an object
function sumar(numero = 0, numero2 = 0) {
    return { 
        resultado: numero + numero2, // Returns the sum
        mensaje: 'Hola mundo' // Returns a message
    };
}

// Destructuring the returned object
const { resultado, mensaje } = sumar(20, 30); // Calls the function with arguments 20 and 30

// Incorrect destructuring (commented out for clarity)
// const { resultado, Holamundo } = sumar(20, 30); // 'Holamundo' does not exist in the returned object
// const [resultado, Holamundo] = sumar(20, 30); // This will cause an error because the returned value is an object, not an array
// const resultado = sumar(10, 50); // This assigns the entire object to 'resultado'

console.log(resultado); // Logs the sum (50)
console.log(mensaje); // Logs 'Hola mundo'
// console.log(Holamundo); // This would cause an error because 'Holamundo' is not defined

// Example in JSX (React)
// const [resultado, setResultado] = useState(0); // Using React's useState hook to manage state
