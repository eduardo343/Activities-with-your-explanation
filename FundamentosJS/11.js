// Iterators for Arrays in JS
const tecnologias = ['Html', 'React', 'JavaScript', 'Node.js'];

// forEach
// forEach - Accesses each element of the array
const arrayForeach = tecnologias.forEach(function (tech) {
    // console.log(tech); // It doesn't matter what you name it (tech or x); it will work for accessing each element.
    return tech; // Note: forEach does not return a new array.
});

// map
const arrayMap = tecnologias.map(function (tech) {
    // console.log(tech); // Logging each element (optional).
    return tech; // Returns each element to create a new array.
});

console.log(arrayForeach); // This will log 'undefined' because forEach doesn't return anything useful.
console.log(arrayMap); // This will log the new array: ['Html', 'React', 'JavaScript', 'Node.js'].
