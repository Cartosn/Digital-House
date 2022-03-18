const input = require("prompt-sync")({ sigint: true });
//1
let cosa=input('Ingresa una frase: ')

console.log(`Esta es tu frase: ${cosa}`)

//2

function exclamacion(nombre){
    return 'Hola ' + nombre + '!'
}

console.log(exclamacion(input('Ingresa tu nombre: ')))

//3

function suma(numero1,numero2){
    numero1=parseInt(input("Ingresa un numero: ")) 
    numero2=parseInt(input("Ingresa un numero: ")) 
    return numero1 + numero2
}

console.log(suma())

//4

function anios(anio){
    anio=parseInt(input('Ingresa tu fecha de nacimiento: '))
    let edad=2022-anio;
    return `Tienes ${edad} años`
}

console.log(anios())

//5

function adivina(numero_user){
    let numero=Math.floor(Math.random()*11);
    console.log(numero)
    numero_user=parseInt(input('Ingresa un numero del 0 al 1o: '))
    if (numero==numero_user){
        return 'Felicitaciones, ese era!'
    }
    else{
        return 'Lo siento, intenta nuevamente!'
    }
}

console.log(adivina())

//6

// let contador=1;

// while (contador!=100){
//     if (contador%2==0){
//         console.log(contador)
//     }
//     contador++
// }

for (let i=0;i<=101;i++){
    if(i%2==0){
        console.log(i)
    }
}

//7

const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];

for (let i=0;i!=nombres.length;i++){
    console.log(nombres[i])
}

//8

function asdf(numero){
    numero=input('Ingresa el numero: ')
    if (numero>500){
        return 0.18*numero
    }
}

console.log(asdf())

//9

function elemento(array){
    if (array.length<3){
        return -1
    }
    return array[2]
}

console.log(elemento())

//10

//mal escrito npi

//11

