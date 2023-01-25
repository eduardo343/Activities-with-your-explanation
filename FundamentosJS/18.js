// Comparacion y Operador Estricto

const numero1 = 20
const numero2 = '20'

// == (comparacion pero no es estricto) === (comparacion estricta)

//console.log(typeof numero1)
//console.log(typeof numero2)

//de esta forma se convierte en string con number
if (String (numero1) ===  numero2){
    console.log( 'Si!, son iguales');
} else {
    console.log('No!, Son iguales');
}

const autenticado = true

if( autenticado === true){
    console.log()
}