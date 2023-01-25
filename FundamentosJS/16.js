// saber si esta ubicado cierta cosa o numero
const tecnologias = ['Html', 'Css', 'JavaScript', 'React']
const numeros = [10, 20, 30]

let  nuevoArray;

//filter
nuevoArray = tecnologias.filter( tech => tech !== 'React')

//comprobar si un elemento existe en el array
//const resultado = tecnologias.includes('React')

// some - devuelve si al menos uno cumple una condicion
// esto funciona cual es mayor a cierto numero que llegues a escoger o menor
//const resultado = numeros.some(numero => numero > 10) //.some te returna si es true o false


//fin - devuelve el primer elemento que cumpla la condicion
//const resultado = numeros.find( numero => numero > 15) // .find te retorna el que cumpla la condicion

//every retorn si todos cumplen la condicion
//const resultado = numeros.every( numero => numero > 15 )

//reduce - acumulando en el total (osea literalmente hace una suma y suelta el resultado)
//const resultado = numeros.reduce((total, numero) => numero + total, 0)

//filter crea un nuevo array en base a una condicion
//const resultado = tecnologias.filter(tech => tech === 'Html')
//const resultado = numeros.filter( numeros => numeros !== 10)// te indicara que numeros son mayores a 10


tecnologias.forEach(( tech, index) => console.log (index))


const arrayMap = tecnologias.map( tech => tech)

console.log(arrayMap);
console.log(resultado);