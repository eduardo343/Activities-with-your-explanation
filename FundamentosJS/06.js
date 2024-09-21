// Destructuring of 2 or more objects
const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: "alan", // here the name has been modified, as you will notice
    premium: true
};

// Destructuring from producto
const { nombre, precio, disponible } = producto;
// const { nombreC, premium } = cliente; // here you declare a new name; I named it nombreC

// A faster way to declare is this
const { nombre: nombreC, premium } = cliente;

console.log(nombre, precio, disponible); // copies the same values and prints them below
// if you remove the variables precio and disponible, only the name "tablet" will appear

console.log(nombreC, premium); // here you should create a new cliente; I created nombreC
// Similarly, if you remove premium, only the user's name will be displayed
