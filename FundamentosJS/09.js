//operaciones en los arreglos

const tecnologias = ['Html', 'React', 'JavaScript', 'Node.js']

//añadir elementos al array
//tecnologias.push('Hola que hace')// añade al final del array //este no se recomienda para react
//tecnologias.unshift('prueba')// añade al principio del array //este tampoco no se recomiendan para react


//const nuevoArreglo = [...tecnologias, 'hola'] //estos si es recomendable usar para react // al usar esto notaras que solo te saldran dos tablas
// y en las tabla de abaj se agrega hola
//const nuevoArreglo = ['hola', ...tecnologias]//este tambien //este arreglo y el de arriba son lo mismo

//Eliminar elementos del array
//tecnologias.pop()// elimina solo el final //estos no se deben usar en react 
//tecnologias.shift()// elimina el inicio //este tampoco
//tecnologias.splice(1, 1)// elimina en una posicion especifica //este tampoco


//const nuevoArray = tecnologias.filter( function (tech){
    //return tech !== 'Html' // !=== desigualdad //para solo traerte un item usa esto ===
//})  


//Reemplazar del array
//tecnologias[0] = 'hola' //reemplazar de esta forma no



//const nuevoArray = tecnologias.map( function (tech){
   //console.log(tech)
//})

const nuevoArray = tecnologias.map(function (tech){//.map es un iterador
    if(tech === 'Html'){
        return 'probando'
    } else{
        return tech
    } //esta si es la buena
})

//reemplazar del array
console.table(tecnologias)
//console.table(nuevoArreglo)
console.table(nuevoArray)