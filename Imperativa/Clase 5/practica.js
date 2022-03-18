const input = require("prompt-sync")({ sigint: true });


let centimetros=(pulgadas=input('Ingrese las pulgadas')) => pulgadas*2.54

console.log(centimetros())


function url(nombre){
    return `"http:/www.${nombre}.com"`
}

console.log(url(input("Ingresa el nombre: ")))


let admiracion=function(texto){
    texto=input("Ingresa el texto: ")
    return texto + '!'
}

console.log(admiracion())


let perros=(edad_humana)=>{
    edad_humana=input("Ingresa tu edad: ")
    return edad_humana*7
}

console.log(perros())

function hora(sueldo){
    return sueldo/40
}

console.log(hora(input("Ingresa tu sueldo: ")))


function imc(peso, altura){
    peso=input("Ingresa tu peso: ")
    altura=input("Ingresa tu altura: ")
    return peso/(altura**2)
}


console.log(imc())
















//NO SIGAS BAJANDO, HAZLO POR TU CUENTA



































function mayus (texto){
    texto=input("Ingresa el texto: ")
    return texto.toUpperCase()
}

function type(algo){
    return typeof(algo)
}

function longitud(radio){
    return Math.PI*2*radio
}

console.log(mayus())
console.log(type(input("Ingresa: ")))
console.log(longitud(3))