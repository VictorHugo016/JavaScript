function inserir(vetor){
        let objeto = {
            marca: prompt("Informe a marca da bike"),
            modelo: prompt("Informe o modelo da bike"),
            quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
            aro: parseInt(prompt("Informe o tamanho do aro da bike")),
            ano: parseInt(prompt("Informe o ano da bike")),
            preco: parseFloat(prompt("Informe o preço da bike"))
        }
        vetor.push(objeto) 
        console.log('Bike inserida com sucesso')
}



function media(vetor){
    let soma = 0
        for(let i=0;i<3;i++){
            soma = soma + vetor[i].preco
        }   
    console.log(`Média de preço das bikes ${soma/vetor.length}`)
}


function antiga(vetor){
    let maisAntiga = []
    maisAntiga[0] = vetor[0] // atribui todo o objeto
    for(let i=1;i<3;i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] //   o vetor
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
        }
    }
    console.log(`Bike(s) mais antiga(s)`)
    console.log(maisAntiga)
}


function marcaC(vetor){
    let caloi = []
    for(let i=0;i<3;i++){
        if (vetor[i].marca == 'CALOI'){
            caloi.push(vetor[i])
        }
    }
    console.log(caloi)
}

function qtde29(vetor) {
let aro29 = 0
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].aro == 29){
            aro29++
        }
    }
    console.log(`Quantidade de bikes aro 29 ${aro29}`)
}

function maiorQ(vetor){
    let maiorQuadro = vetor[0]
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].quadro > maiorQuadro.quadro){
            maiorQuadro = vetor[i]
        }
    }
    console.log(maiorQuadro)
}

function bike(){
    let vetor = []
    let op = 1

    while (op != 7 ){
        
        op = Number(prompt(`Selecione a opção desejada:\n1- inserir bike \n
        2- Calcular media \n
        3- Ver a bike mais antiga \n
        4- quantidade de bike caloi \n
        5- Quantidade de bike aro 29 \n
        6- Ver qual Bike tem o maior quadro\n 
        7- para sair do programa`))
    
        switch (op) {
            case 1:
            // inderir bike
            inserir(vetor);
        
            case 2:
            // média de preço das bikes
            media(vetor)
            
            case 3:
            // bike(s) mais antiga(s)
            antiga(vetor)

            case 4:
             //bikes da marca Caloi
            marcaC(vetor)

            case 5:
            // qts bikes aro 29
            qtde29(vetor)

            case 6:
             // qual bike possui maior quadro, desconsidere empates
            maiorQ(vetor)

            case 7:
            break
        }
    }
}