function lermatriz(matriz){

    for(let i=0;i<15;i++){
        matriz[i] = []     
            for(let j=0;j<5;j++){
                matriz[i][j]= (parseInt(Math.random()*10))
            
        }
    }
}

function nomeAl(vetorNome){
    for(let i=0; i<15;i++){
        vetorNome[i] = prompt('Insira o nome do aluno:')
    }
}

function media(matriz, vetorMedia){
    
    for(let i=0;i<15;i++){
        let soma = 0
            
            for(let j=0;j<5;j++){
               soma = soma + matriz [i][j]            
            }
        
        vetorMedia[i]= (soma/5)
    }
}
function aprova(vetorMedia, vetorAprov){
    for(let i=0;i<15;i++){
       if (vetorMedia[i] >= 6){
            vetorAprov[i] = "Aprovado"
       }
       else if (vetorAprov[i] < 6 && vetorAprov[i] > 3){
            vetorAprov[i] = "Exame"
       }
       else{
            vetorAprov[i] = "Reprovado"
        }
    }

}
function principal(){
    let matriz = []
    let vetorMedia = []
    let vetorNome = []
    let vetorAprov = []

    lermatriz(matriz)
    nomeAl(vetorNome)
    media(matriz, vetorMedia)
    aprova(vetorMedia, vetorAprov)

    for(let i=0;i<15;i++){
        console.log(`Nome: ${vetorNome[i]} Media: ${vetorMedia[i]} situação: ${vetorAprov[i]} `)
    }
}
principal()