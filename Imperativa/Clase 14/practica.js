// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]
// let menoresA18=[]
// let mayoresIgualA18=[]
// let igualA18=[]
// let menor=123456;
// let mayor=0
// let promedio=0
// let incrementadas=[]

// let suma=0
// for (let i=0;i!=edades.length;i++){
//     if (edades[i]<18){
//         menoresA18.push(edades[i])
//     }
//     if (edades[i]>=18){
//         mayoresIgualA18.push(edades[i])
//     }
//     if (edades[i]==18){
//         igualA18.push(edades[i])
//     }
//     if(edades[i]<menor){
//         menor=edades[i]
//     }
//     if(edades[i]>mayor){
//         mayor=edades[i]
//     }
//     suma+=edades[i]
//     incrementadas.push(edades[i]+1)
// }
// promedio=suma/edades.length

// console.log(`Menores a 18: ${menoresA18}`)
// console.log(`Mayores o iguales a 18: ${mayoresIgualA18}`)
// console.log(`Iguales a 18: ${igualA18}`)
// console.log(`El numero menor: ${menor}`)
// console.log(`El numero mayor: ${mayor}`)
// console.log(`Este es el promedio: ${promedio}`)
// console.log(`Incremebtadas: ${incrementadas}`)




const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },  
    {   
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },  
    {   
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },  
    {   
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },  
    {   
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

let menoresA30=[]
let mayoresIgualesA30=[]
let igualesA30=[]
let sueldo=[]
let cuentacorriente=[]
let estaHabilitada=[]
let noEstaHabilitada=[]

let masJoven=12345
let indexMasJoven=0
let menorSaldo=arrayCuentas[0].saldo
let indexMenorSaldo=0
let mayorSaldo=arrayCuentas[0].saldo
let indexMayorSaldo=0
for (let i=0;i!=arrayCuentas.length;i++){
    if(arrayCuentas[i].edadTitular<30){
        menoresA30.push(arrayCuentas[i])
    }
    if(arrayCuentas[i].edadTitular>=30){
        mayoresIgualesA30.push(arrayCuentas[i])
    }
    if(arrayCuentas[i].edadTitular==30){
        igualesA30.push(arrayCuentas[i])
    }
    if(arrayCuentas[i].edadTitular<masJoven){
        masJoven=arrayCuentas[i].edadTitular
        indexMasJoven=i
    }
    if (arrayCuentas[i].tipoCuenta=="sueldo"){
        sueldo.push(arrayCuentas[i])
    }
    else{
        cuentacorriente.push(arrayCuentas[i])
    }
    if (arrayCuentas[i].estaHabilitada==true){
        estaHabilitada.push(arrayCuentas[i])
    }
    else{
        noEstaHabilitada.push(arrayCuentas[i])
    }
    if (arrayCuentas[i].saldo<menorSaldo){
        menorSaldo=arrayCuentas[i].saldo
        indexMenorSaldo=i
    }
    if (arrayCuentas[i].saldo>mayorSaldo){
        mayorSaldo=arrayCuentas[i].saldo
        indexMayorSaldo=i
    }
}



console.log('Estos son los menores a 30: ',menoresA30)
console.log("Mayores o iguales a 30: ",mayoresIgualesA30)
console.log('Iguales a 30: ',igualesA30)
console.log('Cuenta del mas joven: ',arrayCuentas[indexMasJoven])
console.log('Estas son las cuentas de nomina:' ,sueldo)
console.log('Estas son las cuentas corrientes: ',cuentacorriente)
console.log('Estas cuentas estan habilitadas: ',estaHabilitada)
console.log('Estas cuentas estan deshabilitadas: ',noEstaHabilitada)
console.log('Esta es la cuenta con menor saldo: ',arrayCuentas[indexMenorSaldo])
console.log("Esta es la cuenta con mayor saldo: ", arrayCuentas[indexMayorSaldo])
