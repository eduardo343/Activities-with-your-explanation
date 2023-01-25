// objetos

//const nombre = "tablet" // estos quedaran desactivados porque utilizaremos lo que estamos codificando abajo
//const precio = 300
//const disponible = true

//el crear objetos
const producto = { /// a las llaves en ingles se les dice curl braces
   nombre : "tablet ",
   precio : 300,
   disponible : true
}

console.log (producto)
console.table(producto)// cuando usas el modo table se acomodan los elementos en modo table y es mejor visiblemente

console.log(producto.disponible)// para acceder a las propiedades usa estos comandos
console.log(producto.nombre)//si sigues te aparecera mucha informacion de como usar comandos solo da click object y prototype
console.log(producto.precio)// cuando pones el . significa que siempre accderas a un objeto

//destructuring  //el destructuring sirve para sacar valores
const { nombre, precio, disponible } = producto //puedes inventar bastantes cosas hasta la palabra imagen que tomara los valores de arriba
console.log(nombre) // esto es lo mismo que usar console.log solo que en esta ocasion usas const y las {}
console.log(precio)
console.log(disponible)

//object literal enhacement
const autenticado = true
const usuario = 'alan'
const password = 'tugfa2.0'
const nuevoObjeto = {
    autenticado : autenticado, //puedes quitar el repetido de autenticado pero ten cuidado deben llamarse igual
    usuario : usuario,
    password : password
}
console.table(nuevoObjeto)