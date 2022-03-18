// console.log(
//     "Gato" && "Perro")

// let dia = 'jueves'

// function finDeSemana(dia){
//     switch(dia){
//         case 'viernes':
//             console.log('buen finde')
//             break;
//         case 'lunes':
//             console.log('buena semana')
//             break;
//         default:
//             console.log('buen dia')
//             break;
//     }	
// }

// console.log(finDeSemana(dia))

function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log("tenés clases")
			break;
		default:
			console.log("no tenés clases")
	}
}

tengoClases('miércoles')