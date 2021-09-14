"use strict";

//Funcion para imprimir por consola

function imprimir(numero1,numero2){

    //Variable que almacena el segundo parametro

    let numero = numero2;

    //Muestra por consola el primer numero

    console.log(numero)

    //Un bucle que muestra por consola el numero multiplandose por 2 las veces introducidas en el primer parametro

    for(let repeticiones = numero1;repeticiones>1;repeticiones--){

        numero = numero*2;
        console.log(numero);

    }
}
