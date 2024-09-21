// Merging 2 objects
const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: 'alan',
    premium: true
};

// Let's merge these two

// const nuevoObjeto = Object.assign(producto, cliente); // this will return a new object for the console
const nuevoObjeto2 = {
    producto: { ...producto },
    cliente: { ...cliente }
}; // the three dots mean to take a copy of the product.

console.log(nuevoObjeto2);
console.log(cliente);
console.log(producto);
