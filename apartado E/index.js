"use strict";

let factura=[124,48,268];
let propina=[3];
let cantidadFinal=[3];

for(let i=0;i<3;i++){

    if(factura[i]<50){
        
        propina[i]= factura[i]*0.20;

    }else if(factura[i]<=200){

        propina[i]= factura[i]*0.15;

    }else{

        propina[i]= factura[i]*0.10;

    }

    cantidadFinal[i]=factura[i]+propina[i];

    console.log("Factura " +  (i+1) + " valor de la factura: " + factura[i] + " ,propina: " + propina[i].toFixed(2) + " ,precio total: " + cantidadFinal[i]);

}





