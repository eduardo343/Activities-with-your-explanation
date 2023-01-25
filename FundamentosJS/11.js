//iteradores de arreglos en js
const tecnologias = ['Html', 'React', 'JavaScript', 'Node.js']

//forEach
//forEach - Accder a cada elemento del array
 const  arrayForeach =tecnologias.forEach(function (tech) {
    //console.log(tech) //no importa como lo llames tech o x siempre funcionara para la separacion
    return tech
})

const arrayMap = tecnologias.map( function (tech){
    //console.log(tech)
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)