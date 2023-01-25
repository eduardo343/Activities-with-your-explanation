//Objetos -Manipulacion

const producto = { //aunque sea const se puede modificar las propiedades
    nombre: "Tablet",
    precio: 300, 
    disponible: true /// a las llaves en ingles se les dice curl braces
 }
 //no modificar objetos

 //Object.freeze(producto) - freez- No deja modificarlo
 //segunda opcion para que no se puedan modificar los objetos
 ///Object.seal(producto) // Modificar propiedades existentes, no deja añadir ni eliminar

 //rescribir un valor
 producto.nombre = "Monitor Curvo Gamer"
//si no existe, lo va añadir
 producto.image = "imagen.jpg"

//eliminar propiedad 
delete producto.nombre

 console.table(producto)