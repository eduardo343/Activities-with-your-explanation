// unir 2 objetos
const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'alan',
    premium : true
}

//vamos a unir a estos dos

//const nuevoObjeto = Object.assign(producto, cliente) // aqui nos devolvera un nuevo objeto para la consola
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}//los tres puntos significa que tome una prueba del producto.


console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)