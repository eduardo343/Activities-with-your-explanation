// Operations on Arrays

const tecnologias = ['Html', 'React', 'JavaScript', 'Node.js'];

// Adding elements to the array
// tecnologias.push('Hola que hace'); // Adds to the end of the array; this is not recommended for React.
// tecnologias.unshift('prueba'); // Adds to the beginning of the array; this is also not recommended for React.

// Using the spread operator to create a new array is recommended in React:
// const nuevoArreglo = [...tecnologias, 'hola']; // This will create a new array with 'hola' added at the end.
// This results in two tables being displayed, with 'hola' added in the lower table.
// const nuevoArreglo = ['hola', ...tecnologias]; // This also works; it adds 'hola' at the beginning.

// Removing elements from the array
// tecnologias.pop(); // Removes the last element; not recommended in React.
// tecnologias.shift(); // Removes the first element; also not recommended.
// tecnologias.splice(1, 1); // Removes an element at a specific position; not recommended.

// Filtering the array
// const nuevoArray = tecnologias.filter(function (tech) {
//     return tech !== 'Html'; // This will return all items except 'Html'.
//     // To check for equality and retrieve a specific item, use ===.
// });

// Replacing an element in the array
// tecnologias[0] = 'hola'; // Directly replacing an element this way is not recommended.

// Mapping over the array to create a new one
const nuevoArray = tecnologias.map(function (tech) { // .map is an iterator.
    if (tech === 'Html') {
        return 'probando'; // Replace 'Html' with 'probando'.
    } else {
        return tech; // Return the original value for all other elements.
    } // This is the correct way to replace an element.
});

// Display the original and new arrays
console.table(tecnologias); // Shows the original array.
console.table(nuevoArray); // Shows the new array with 'Html' replaced.
