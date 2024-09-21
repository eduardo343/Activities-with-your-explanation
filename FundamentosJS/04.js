// Objects

// const nombre = "tablet"; // these will be commented out because we will use what we are coding below
// const precio = 300; 
// const disponible = true;

// Creating objects
const producto = { // curly braces in English
   nombre: "tablet",
   precio: 300,
   disponible: true
};

console.log(producto);
console.table(producto); // when using table mode, elements are arranged in a table format, making it visually clearer

console.log(producto.disponible); // to access properties, use these commands
console.log(producto.nombre); // if you continue, you will see a lot of information on how to use commands; just click on object and prototype
console.log(producto.precio); // using the dot means you will always access an object's properties

// Destructuring // destructuring is used to extract values
const { nombre, precio, disponible } = producto; // you can create many variables, including one called imagen that will take values from above
console.log(nombre); // this is the same as using console.log, but here you use const and {}
console.log(precio);
console.log(disponible);

// Object literal enhancement
const autenticado = true;
const usuario = 'alan';
const password = 'tugfa2.0';
const nuevoObjeto = {
    autenticado: autenticado, // you can omit the repeated authenticated, but be careful; they must be named the same
    usuario: usuario,
    password: password
};
console.table(nuevoObjeto);
