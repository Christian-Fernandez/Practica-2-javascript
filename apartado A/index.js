"use strict";

let alturaMarcos=1.8;
let alturaJuan=1.75;
let masaMarcos=85;
let masaJuan=76;

 let imcMarcos=masaMarcos/(alturaMarcos*alturaMarcos);
 let imcJuan= masaJuan/(alturaJuan*alturaJuan); 

 let comprobacion = imcMarcos>imcJuan;

 console.log("¿Tiene Marcos un IMC mayor que el de Juan?: " + comprobacion);