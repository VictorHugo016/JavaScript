function lermatriz(matriz){

    for(let i=0;i<20;i++){
        matriz[i] = []     
            for(let j=0;j<10;j++){
                matriz[i][j]= (parseInt(Math.random()*10))
            
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function somaColuna(matriz, vetC){
    for(let j=0;j<10;j++){ 
        let soma = 0
            for(let i=0;i<20;i++){
                soma = soma + matriz [i][j]   
            }
        vetC[j] = soma
    }
}

function multMatriz(matriz, vetC){
    for(let j=0;j<10;j++){ 
            for(let i=0;i<20;i++){
                matriz [i][j] = matriz [i][j] * vetC [j]
                
            }
    }
}

function principal(){
    let matriz = []
    let vetC = []
    lermatriz(matriz)
    somaColuna(matriz, vetC)
    multMatriz(matriz, vetC)
    mostraMatriz(matriz)
}
principal()