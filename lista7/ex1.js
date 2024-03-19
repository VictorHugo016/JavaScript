function lermatriz(matriz){

    for(let i=0;i<3;i++){
        matriz[i] = []     
            for(let j=0;j<5;j++){
                matriz[i][j]= (parseInt(Math.random()*20))
            
        }
    }
}

function mostraM(matriz){
    console.log(matriz)
}

function verifica(matriz){
    let cont = 0
    
    for(let i=0;i<3;i++){    
        for(let j=0;j<5;j++){
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20){
                cont = cont + 1
            }
            
        }
    }
    console.log(`Na matriz temos ${cont} elementos entre 15 e 20`)
}

function principal(){
    let matriz = []
    lermatriz(matriz)
    mostraM(matriz)
    verifica(matriz)
}
principal()