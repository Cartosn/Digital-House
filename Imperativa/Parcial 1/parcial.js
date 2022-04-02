const input = require("prompt-sync")({ sigint: true });

//1

//a
let estudiante={
    nombre:'Carlos',
    apellido:'Guarin',
    camada:6,
    esParcial:true
}

//b
function situacionAlumno(nota){
    if (nota >= 7){
        return 'Promocionado'
    } else if(nota < 7 && nota >= 4 ){
        return 'Debe rendir examen final '
    }else{
        return 'desaprobado'
    }
}

let notaEstudiante=input('Ingrese la nota del estudiante: ')

console.log(`El alumno obtuvo una nota igual a ${notaEstudiante} por lo tanto su condición es ${situacionAlumno(notaEstudiante)}`)

//2

let clase =
[
    {
        nombres: 'Ana',
        apellidos: 'Ortiz',
        bimestre: 1
    },
    {
        nombres: 'Lucia',
        apellidos: 'Garcia',
        bimestre: 2
    },  
    {   
        nombres: 'Ruth',
        apellidos: 'Guarin',
        bimestre: 3
    }  
]

console.log(clase)

function siguienteCursada(array){
    for (let i = 0;i != array.length;i++){
        array[i].bimestre+=1
    }
}

siguienteCursada(clase)
console.log(clase)

//3

function estadoAlumno(asistencias, playground){
    const asistenciaMinima=23
    if(asistencias >= asistenciaMinima && playground){
        return 'Aprobado'
    }else{
        return "Desaprobado"
    }
}

console.log(estadoAlumno(25,true))