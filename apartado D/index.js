"use strict";

//Funcion para la factura en caso de no haber parametros se pondran por predeterminado los puestos en la funcion

function factura(nombreProducto="Producto genérico",precio=100,impuesto=21){

    //Variable del precio final
    let precioFinal=precio+(precio*(impuesto/100));

    //Comprobacion de si es NaN

    if(isNaN(precio) || isNaN(impuesto)){

        //Caso afirmativo muestra por consola un error
        console.error("Error formato numerico incorrecto");

    }else{
        //Caso negativo muestra por consola el nombre del producto junto al precio final
        console.log("Nombre del producto: " + nombreProducto + " precio final: " + precioFinal );

    }


}


