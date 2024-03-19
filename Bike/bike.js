let vetor = []

function inserir(){
        let objeto = {
            marca: prompt("Informe a marca da bike"),
            modelo: prompt("Informe o modelo da bike"),
            quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
            aro: parseInt(prompt("Informe o tamanho do aro da bike")),
            ano: parseInt(prompt("Informe o ano da bike")),
            preco: parseFloat(prompt("Informe o preço da bike"))
        }
        vetor.push(objeto) 
        
        document.getElementById("resultado").innerHTML = 
        'Bike inserida com sucesso'
}
function media(){
    let soma = 0
        for(let i=0;i<vetor.length;i++){
            soma = soma + vetor[i].preco
        }   
        document.getElementById("resultado").innerHTML = `Média de preço das bikes ${soma/vetor.length}`
   
}
function antiga(){
    let maisAntiga = []
    maisAntiga[0] = vetor[0] 
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] 
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) 
        }
    }
    document.getElementById("resultado").innerHTML = `Bike(s) mais antiga(s) ${maisAntiga}`
}
function marcaC(){
    let caloi = []
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].marca == 'CALOI'){
            caloi.push(vetor[i])
        }
    }
    document.getElementById("resultado").innerHTML = caloi
}
function qtde29() {
let aro29 = 0
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].aro == 29){
            aro29++
        }
    }
    document.getElementById("resultado").innerHTML = `Quantidade de bikes aro 29 ${aro29}`
}
function maiorQ(){
    let maiorQuadro = vetor[0]
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].quadro > maiorQuadro.quadro){
            maiorQuadro = vetor[i]
        }
    }
    document.getElementById("resultado").innerHTML = maiorQuadro
}