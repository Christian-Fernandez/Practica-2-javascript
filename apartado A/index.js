"use strict";

//Variables altura

let alturaMarcos=1.8;
let alturaJuan=1.75;

//Variables masa

let masaMarcos=85;
let masaJuan=76;

//Variables imc

 let imcMarcos=masaMarcos/(alturaMarcos*alturaMarcos);
 let imcJuan= masaJuan/(alturaJuan*alturaJuan); 


 //Variable de comprobacion del imc

 let comprobacion = imcMarcos>imcJuan;

 //Mostrar por consola la comprobacion

 console.log("¿Tiene Marcos un IMC mayor que el de Juan?: " + comprobacion);