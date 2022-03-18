const input = require("prompt-sync")({ sigint: true });

let edad=-7;

if (edad%2!=0){
    console.log("¿Sabías que tu edad es impar?")
}
if (edad <0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}else if(edad<18){
    console.log("No puede pasar al bar")
}else if(edad<21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol")
}else{
    console.log("Puede pasar al bar y tomar alcohol")
    if(edad==21){
        console.log("Felicitaciones por alcanzar la mayoria de edad")
}}





function totalAPagar(vehiculo, litrosConsumidos){
    let precioLitro=0
    let total=0
    if (vehiculo=='coche'){
        precioLitro=86
    }else if(vehiculo=='moto'){
        precioLitro=70
    }else{
        precioLitro=55
    }
    ///
    if (litrosConsumidos>0 && litrosConsumidos<=25){
        total+=50
    }else{
        total+=25
    }
    ///
    return total+(litrosConsumidos*precioLitro)
}

console.log(totalAPagar("coche",7))

function sandwich(tipo, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    tipo=input()
    pan=input()
    queso=input()
    tomate=input()
    lechuga=input()
    cebolla=input()
    mayonesa=input()
    mostaza=input()
    let precio=0;
    ///tipo
    if (tipo='pollo'){
        precio+=150
    }else if(tipo='carne'){
        precio+=200
    }
    else{
        precio+=100
    }
    ///pan
    if (pan='blanco'){
        precio+=50
    }else if(pan='negro'){
        precio+=60
    }else{
        precio+=75
    }
    ///adicionales
    if(queso=true){
        precio+=20
    }
    if(tomate=true){
        precio+=15
    }
    if(lechuga=true){
        precio+=10
    }
    if(cebolla=true){
        precio+=15
    }
    if(mayonesa=true){
        precio+=5
    }
    if(mostaza=true){
        precio+=5
    }
    ///pagar
    return `El valor que debes retornar es ${precio}`
}

console.log(sandwich())