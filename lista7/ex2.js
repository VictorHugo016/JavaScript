function lermatriz(matriz){

    for(let i=0;i<2;i++){
        matriz[i] = []     
            for(let j=0;j<4;j++){
                matriz[i][j]= (parseInt(Math.random()*20))
            
        }
    }
}

function mostraM(matriz){
    console.log(matriz)
}

function verificaPar(matriz){
    let par = 0
    
    for(let i=0;i<2;i++){    
        for(let j=0;j<4;j++){
            if (matriz[i][j] % 2 == 0){
                par = par + 1
            }
            
        }
    }
    console.log(`Na matriz temos ${par} elementos pares`)
}

function verificaLinha(matriz){
    let l1 = 0
    let l2 = 0

        for(let j=0;j<5;j++){
            if (matriz[0][j] >= 12 && matriz[0][j] <= 20){
                l1 = l1 + 1
            }
            
        }
        for(let j=0;j<5;j++){
            if (matriz[1][j] >= 12 && matriz[1][j] <= 20){
                l2 = l2 + 1
            }
            
        }

    console.log(`Na linha 1 temos ${l1} elementos entre 12 e 20`)
    console.log(`Na linha 2 temos ${l2} elementos entre 12 e 20`)
}



function principal(){
    let matriz = []
    lermatriz(matriz)
    mostraM(matriz)
    verificaPar(matriz)
    verificaLinha(matriz)
}
principal()