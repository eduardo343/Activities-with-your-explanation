//destructuring de 2 o mas objetos
const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
 };
 
 const cliente = {
 
       nombre: "alan",//aqui esta modificado el nombre como lo notaras
       premium: true
 };
 
 const { nombre, precio, disponible} = producto
 //const { nombreC, premium } =  cliente// aqui declaras el nuevo nombre yo le puse nombre C
//Existe un metodo mas rapido para declarar que seria este

const { nombre: nombreC,premium} = cliente

 console.log(nombre, precio, disponible) // copias lo mismo y lo pones abajo
 //al quitar la variables precio disponible solo va aparecer el nombre tablet

 console.log(nombreC, premium) = cliente// aqui abajo debes crear un nuevo cliente yo cree nombreC
 //Tambien es el caso de aqui si quitas premium solo saldra el nombre del usuario