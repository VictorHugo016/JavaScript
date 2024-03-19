function lermatriz(matriz){

    for(let i=0;i<12;i++){
        matriz[i] = []     
            for(let j=0;j<4;j++){
                matriz[i][j]= (parseInt(Math.random()*100))
            
        }
    }
}

function mes(vetorMes){
    vetorMes[0] = "janeiro"
    vetorMes[1] = "fevereiro"
    vetorMes[2] = "Março"
    vetorMes[3] = "abriu"
    vetorMes[4] = "maio"
    vetorMes[5] = "junho"
    vetorMes[6] = "julho"
    vetorMes[7] = "agosto"
    vetorMes[8] = "setembro"
    vetorMes[9] = "outubro"
    vetorMes[10] = "novembro"
    vetorMes[11] = "dezembro"
}

function totalMes(matriz, vetorMes){
    for(let i=0;i<12;i++){   
        let soma = 0  
        for(let j=0;j<4;j++){
            soma = soma + matriz[i][j]
        }
        console.log(`A soma total do mes ${vetorMes[i]} é ${soma}`)
    }
}

function totalSemana(matriz){
    let k = 1
    for(let i=0;i<12;i++){   
        for(let j=0;j<4;j++){
            console.log(`A soma total da semana ${k} é ${matriz[i][j]}`)
            k++  
        }
    }
}

function totalAno(matriz){
    let soma = 0
    for(let i=0;i<12;i++){     
        for(let j=0;j<4;j++){
            soma = soma + matriz[i][j]
             
        }
    }
    
    console.log(`A soma total do ano é ${soma}`)

}


function principal(){
    let matriz = []
    let vetorMes = []

    lermatriz(matriz)
    mes(vetorMes)
    totalMes(matriz, vetorMes)
    totalSemana(matriz)
    totalAno(matriz)

}
principal()