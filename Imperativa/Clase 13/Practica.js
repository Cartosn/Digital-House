function loopDePares(numero){
    for (let i=1;i<=100;i++){
        console.log(i)
        if ((i+numero)%2==0){
            console.log(`El numero ${i} es par`)
        }
    }
}

function loopDeImpares(numero, palabra){
    for (let i=1;i<=100;i++){
        console.log(i)
        if ((i+numero)%2!=0){
            console.log(palabra)
        }
    }
}

function sumatoria(numero){
    let resultado=0
    for (let i=1;i<=numero;i++){
        resultado+=i
    }
    return resultado
}

function nuevoArreglo(numero){
    let array=[]
    for (let i=1;i<=numero;i++){
        array.push(i)
    }
    return array
}

function split(texto){
    let array=[]
    for (let i=1;i<=texto.length;i++){
        array.push(texto[i-1])
    }
    return array
}

// function caracterDelMedio(texto){

// }

// function moverCeros(array){
//     for (let i=0;i+1!=array.length;i++){
//         if (array[i]==0){
//             let caracter=array.slice(i)
//             array.push(caracter)
//         }
//     }
//     return array
// }




// loopDePares(5)
// loopDeImpares(6,'Hola')
// console.log(sumatoria(8))
// console.log(nuevoArreglo(5))
// console.log(split('Hola'))
// console.log(moverCeros([false,1,0,1,2,0,1,3,"a"]))