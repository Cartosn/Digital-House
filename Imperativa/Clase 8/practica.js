const input = require("prompt-sync")({ sigint: true });

// function numeros_siguientes(numero){
//     numero=parseInt(input())
//     for (let i=numero+1;i<=10+numero;i++){
//         console.log(i)
//     }
// }

// numeros_siguientes()

// for (let i=5;i<=20;i+=3){
//     console.log(i)
// }

// let acumulado=0;
// for (let i=1;i<=100;i++){
//     acumulado+=i
// }
// console.log(acumulado)

// let a=input('Ingresa el numero hasta el que deseas hacer factorial: ')
// let resultado=1
// for(let i=1;i<=a;i++){
//     resultado=resultado*i
// }

// console.log(resultado)

function fibonacci(numero){
    let start=[1,1]
    while(start.length!=numero){
        start.push(start[start.length-2]+start[start.length-1])
    }
    return start[start.length-1]
}

// start=[1,1,2,3]

console.log(fibonacci(10))

// function asdf(numero){
//     let numero1=1
//     let numero2=1
//     let contador=1
//     let vacio=0
//     while(contador<=numero-2){
//         let nuevo_numero=numero1+numero2
//         vacio=numero2
//         numero2=nuevo_numero
//         numero1=vacio
//         contador++
//     }
//     return numero2
// }

// console.log(asdf(10))

