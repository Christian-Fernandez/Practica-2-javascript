"use strict";

function factura(nombreProducto="Producto genérico",precio=100,impuesto=21){

    let precioFinal=precio+(precio*(impuesto/100));

    if(isNaN(precio) || isNaN(impuesto)){

        console.error("Error formato numerico incorrecto");

    }else{

        console.log("Nombre del producto: " + nombreProducto + " precio final: " + precioFinal );

    }


}


