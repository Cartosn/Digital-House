const alicia=[10,50,75];
const bob=[90,50,25];

let concurso={
    etapas:[],
    encontrarGanador:function(a,b){
        let puntosPrimerParcitipante=0
        let puntosSegundoParcitipante=0
        for (let i=0;i<3;i++){
            if(a[i]>b[i]){
                puntosPrimerParcitipante+=1
                this.etapas.push('Alicia')
            }else if(b[i]>a[i]){
                puntosSegundoParcitipante+=1
                this.etapas.push('Bob')
            }else{
                this.etapas.push('Empate')
            }
        }
        if (puntosPrimerParcitipante>puntosSegundoParcitipante){
            return 'Alicia'
        }else if(puntosSegundoParcitipante>puntosPrimerParcitipante){
            return 'Bob'
        }
        else{
            return "Empate"
        }
    },
    ganador:''
}

concurso.ganador=concurso.encontrarGanador(alicia,bob)

console.log(`Este es el resultado de las rondas: ${concurso.etapas}`)
console.log(`Este es el ganador del concurso: ${concurso.ganador}`)