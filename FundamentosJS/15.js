const tecnologias = ['Html', 'Css', 'JavaScript', 'React']
 
//const nuevoArray = tecnologias.map ( tech => {
    //if(tech === 'Html'){
      ///  return 'Hola'
    //} else {
     //   return tech
    //}
    
//})


const nuevoArray2 = tecnologias.filter ( tech => tech !== 'react') 
      // si utilizamos === solo saldra react y sera un arreglo
 // en cambio si quieres traerte todos los que no son react !==

//console.log(nuevoArray);
console.log(nuevoArray2);