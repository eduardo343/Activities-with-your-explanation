//tipos de datos

/// undefined 
//let cliente  aqui necesitas definir con algun valor y cambiara a number por el tipo de dato.
//console.log(cliente);
//console.log(typeof cliente); aqui salen no definido

//boolean true or false
//const descuento = false de igual forma si le modificas aqui false o true te dira que es boolean
//console.log(descuento);
//console.log(typeof descuento); aqui es donde te saldra que si es boolean

//number existe una gran cantidad pero a js le da igual
//const number1 =  20.20
//const number2 =  40
//const number3 =  -100
//console.log(typeof number1);
//console.log(typeof number2); en number todos son tratados por igual
//console.log(typeof number3)1;

//strings o cadenas de texto
//const alumno = "pedro" //algunas veces si comienzas con ' sencilla " y terminas con una doble oveamente te saldra error
//let producto = "television de 70 pulgadas"
//let producto2 = 'teclado gamer'

//const numero = '30' // cuando usas las '' como en este ejemplo te dira que es string
//const numero2 = 40 // cuando no usas '' te lo detecta como un numero

//console.log(typeof numero);
//console.log(typeof numero2);

//BigInt son para numeros muy pero muy grandes.
//const numeroGrande = BigInt(121564544646544458899998); // para hacer la suma de numeros muy grandes solo copiar
//const numeroGrande2 = BigInt(121564544646544458899998);// utilizas el console log para hacer la suma de estos grandes.

//const numero = 5000006
//const numero2 = 5000006

//console.log(typeof numeroGrande);
//console.log (typeof numeroGrande2);

//console.log( numeroGrande + numeroGrande2);//tambien se pueden hacer las sumas de ambas cosas.
//console.log(numero + numero2);// recuerda que no puedes sumar numero con numerogrande

//const numero = '30'
//const numero2 = 30

//console.log (typeof String(numero2));
//console.log(typeof Number(numero));//por si quieres convertir esta parte en string solo escribe string en donde dice number

//symbol
//const primerSymbol = Symbol(30)
//const segundoSymbol = Symbol(30)

//console.log(primerSymbol === segundoSymbol)// ==== a esto se le llama igualdad estricta
//console.log(primerSymbol.valueOf());
//console.log(segundoSymbol.valueOf());

//Null valor null 
//const descuento = null  //su instancia sera de tipo objeto  // objeto si sera funcion de objeto
//console.log(typeof descuento)