"use strict";

//Variables

let mediaJuan= (89+120+103)/3;
let mediaMiguel= (116+94+123)/3;
let mediaMaria= (97+134+105)/3;

//Primera parte solo Miguel y juan

if(mediaJuan>mediaMiguel){
    console.log("Equipo ganador es el de Juan, con una media de: " + mediaJuan);
}else if(mediaJuan<mediaMiguel){
    console.log("Equipo ganador es el de Miguel, con una media de: " + mediaMiguel);
}else{
    console.log("Es un empate, con una media de: " + mediaMiguel);
}

//Segunda parte añadiendo a Maria como participante

if(mediaJuan>mediaMiguel && mediaJuan>mediaMaria){
    console.log("Equipo ganador es el de Juan, con una media de: " + mediaJuan);
}else if(mediaMiguel>mediaJuan && mediaMiguel>mediaMaria){
    console.log("Equipo ganador es el de Miguel, con una media de: " + mediaMiguel);
}else if(mediaMaria>mediaJuan && mediaMaria>mediaMiguel){
    console.log("Equipo ganador es el de Maria, con una media de: " + mediaMaria);
}else{
    console.log("Es un empate");
}


