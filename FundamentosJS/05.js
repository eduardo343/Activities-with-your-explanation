// Objects - Manipulation

const producto = { // even though it's const, you can modify the properties
    nombre: "Tablet",
    precio: 300, 
    disponible: true // curly braces in English
};

// Do not modify objects

// Object.freeze(producto); // freeze - prevents modifications
// Second option to prevent object modifications
// Object.seal(producto); // allows modification of existing properties, but does not allow adding or deleting

// Rewrite a value
producto.nombre = "Monitor Curvo Gamer"; 
// If it doesn't exist, it will add it
producto.image = "imagen.jpg"; 

// Delete property 
delete producto.nombre; 

console.table(producto);
