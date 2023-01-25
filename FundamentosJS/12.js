//funciones - function declaration

//function sumar(){
    //console.log(2 * 2);
//}
//sumar()


//en declaracion de la funcion son parametros
//function sumar(numero = 0, numero2 = 0){
    //console.log(numero2)
   // console.log(numero + numero2)
    //console.log(numero + numero2 + numero3);
    //console.log (numero)
    //console.log(numero2)
    //console.log(numero3);
//}

//sumar(10, 30)// yo utilice tres digitos para que la suma salga mejor
//sumar(5, 5)
//sumar(10.5, 10.5) //los valores de aqui se les llama argumento
//sumar()

function sumar( numero = 0, numero2 = 0){
    return { 
        resultado: numero + numero2, 
        mensaje: 'Hola mundo' //aqui ya se esta retornando un objeto
}
}

const {resultado, mensaje} = sumar(20, 30)

//const {resultado, Holamundo} = sumar(20, 30) // el antiguo resultado

//const [resultado, Holamundo] = sumar(20, 30) // en este te da lo resultados separados
//const resultado = sumar (10, 50) // en este uso te da la suma junto al hola mundo
console.log(resultado);
console.log(mensaje)
//console.log(Holamundo); 

//jsx react
//const [ resultado, setResultado] = useState(0)