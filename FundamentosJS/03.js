// Data Types

// undefined 
// let cliente; // here you need to define it with a value, and it will change to number based on the data type.
// console.log(cliente); // console.log(cliente); 
// console.log(typeof cliente); // this will show as undefined

// boolean true or false
// const descuento = false; // similarly, if you change this to false or true, it will indicate that it's a boolean
// console.log(descuento); 
// console.log(typeof descuento); // this will show that it is a boolean

// number - there are many types, but JS treats them the same
// const number1 = 20.20;
// const number2 = 40;
// const number3 = -100;
// console.log(typeof number1); 
// console.log(typeof number2); // all numbers are treated the same
// console.log(typeof number3); 

// strings or text strings
// const alumno = "pedro"; // sometimes if you start with a single quote ' and end with a double quote ", it will give an error
// let producto = "television de 70 pulgadas"; 
// let producto2 = 'teclado gamer';

// const numero = '30'; // when you use '' as in this example, it will indicate that it's a string
// const numero2 = 40; // when you don't use '', it recognizes it as a number

// console.log(typeof numero); 
// console.log(typeof numero2);

// BigInt is for very, very large numbers.
// const numeroGrande = BigInt(121564544646544458899998); // to sum very large numbers, just copy
// const numeroGrande2 = BigInt(121564544646544458899998); // use console.log to sum these large numbers.

// const numero = 5000006; 
// const numero2 = 5000006;

// console.log(typeof numeroGrande); 
// console.log(typeof numeroGrande2); 

// console.log(numeroGrande + numeroGrande2); // you can sum both types. 
// console.log(numero + numero2); // remember that you cannot sum a number with a BigInt

// const numero = '30'; 
// const numero2 = 30; 

// console.log(typeof String(numero2)); 
// console.log(typeof Number(numero)); // to convert this part to string, just write String where it says Number

// symbol
// const primerSymbol = Symbol(30); 
// const segundoSymbol = Symbol(30); 

// console.log(primerSymbol === segundoSymbol); // this is called strict equality
// console.log(primerSymbol.valueOf()); 
// console.log(segundoSymbol.valueOf()); 

// Null value null 
// const descuento = null; // its instance will be of type object // object will be an object function
// console.log(typeof descuento);
