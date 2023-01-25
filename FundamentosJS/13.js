//function expresation

 //const sumar = function ( numero, numero2){
   // console.log( numero + numero2)
 //} 
 //sumar(40, 40)

 
 const sumar = function ( numero = 0, numero2 = 0){
    return numero + numero2
 } 

  const resultado = sumar(40)
console.log(resultado);