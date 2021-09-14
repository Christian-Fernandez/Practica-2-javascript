"use strict";

//Variables para los arrays

let factura=[124,48,268];
let propina=[3];
let cantidadFinal=[3];

//Bucle en el cual se introduce en el arrays de propina el valor proporcional de la propina y en el array cantidadFinal la suma del array factura[i] con propina[i].

for(let i=0;i<3;i++){

    if(factura[i]<50){
        
        propina[i]= factura[i]*0.20;

    }else if(factura[i]<=200){

        propina[i]= factura[i]*0.15;

    }else{

        propina[i]= factura[i]*0.10;

    }

    cantidadFinal[i]=factura[i]+propina[i];

    //Muestra por cocnsola el numero de la factura , el valor de la factura , la propina y el precio final con un formato correcto para que solo tengan 2 decimales.

    console.log("Factura " +  (i+1) + " valor de la factura: " + factura[i] + " ,propina: " + propina[i].toFixed(2) + " ,precio total: " + cantidadFinal[i]);

}





