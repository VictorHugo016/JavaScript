function ex1(){
    let contador2 = 1
    while (contador2 <= 5){  
        let a = Number(prompt('Informe A'))
        let b = Number(prompt('Informe B'))
        let c = Number(prompt('Informe C'))
        let d = Number(prompt('Informe D'))
        let contador = 1
        while (contador <= 3){
            if (a > b){ // troca a com b
                let aux = a
                a = b
                b = aux
            }
            if (b > c){ // troca b com c
                let aux = b
                b = c
                c = aux
            }
            if (c > d){ // troca c com d
                let aux = c
                c = d
                d = aux
            }
            contador++ 
        } // fecha while
        console.log(`Ordem crescente ${a}, ${b}, ${c}, ${d}`)
        console.log(`Ordem decrescente ${d}, ${c}, ${b}, ${a}`)
        contador2++
    } // fecha while
}
function ex2(){
    let qtde = 120
    const custo = 200
    let corpo = ''
    
    for(let preco=5; preco >=1; preco = preco -0.5){
        let lucro = (preco * qtde) - custo
        corpo = corpo + `<tr> 
        <td>${preco.toFixed(2)}</td>
        <td>${qtde}</td>
        <td>${custo.toFixed(2)}</td>
        <td>${lucro.toFixed(2)}</td>
        </tr>`
        qtde = qtde+26   
    }

    document.getElementById('resultado').innerHTML = corpo

}
function ex3(){
    let idade
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    for(let i=1; i<=8; i++){
        idade = Number(prompt('Informe a idade'))
        if (idade >= 0 && idade <= 15){
            f1++
        }
        else if (idade >= 16 && idade <= 30){
                f2++
            }
        else if (idade >= 31 && idade <= 45){
                f3++
            }
        else if (idade >= 46 && idade <= 60){
                f4++
            }
        else if (idade > 60){
                f5++
            }
        else {
            alert('Idade não pode ser negativa')
        } 
    }
    alert(`F1 ${f1} F2 ${f2} F3 ${f3} F4 ${f4} F5 ${f5}`)
    alert(`%F1 ${f1/8*100} %F5 ${f5/8*100}` )
}
function ex4(){
    let tab = Number(prompt('Informe o numero da tabuada:'))
    let corpo = ''

    corpo = corpo + `
    <tr> 
    <td> Tabuada </td> 
    <td> do </td> 
    <td> ${tab}</td>
    </tr>`
    for(let aux = 1; aux <= 10; aux++){
        corpo = corpo + `
        <tr> 
        <td> ${tab} </td> 
        <td> ${aux} </td> 
        <td> ${tab * aux}</td>
        </tr>`
    }

document.getElementById('resultado').innerHTML = corpo
}
function ex5(){
    let corpo = ''
    for(let numero = 1; numero <= 10; numero++){
        corpo = corpo + `
        <tr> 
        <td> Tabuada </td> 
        <td> do </td> 
        <td> ${numero}</td>
        </tr>`
        for(let aux = 1; aux <= 10; aux++){
            corpo = corpo + `
            <tr> 
            <td> ${numero} </td> 
            <td> ${aux} </td> 
            <td> ${numero * aux}</td>
            </tr>`
        }
    }
    document.getElementById('corpo').innerHTML = corpo
}
function ex6(){
    let meio = prompt('"Qual o meio de pagamento "V" ou "P"')
    let valor = Number(prompt('Digite o valor do produto:'))
    let cont = 0
    let valorTV = 0
    let valorTP =  0
    let total = 0
    let primeiraP = 0  
    let aux = null

    for( cont=1; cont<=2; cont++){
        if (meio == "V" ){
            valorTV = valorTV+valor
        }
        else if (meio == "P"){
            valorTP = valorTP+valor
            primeiraP = primeiraP + (valor/3)
        }
        
        meio = prompt('"Qual o meio de pagamento "V" ou "P"')
        valor = Number(prompt('Digite o valor do produto:'))
    }

    total = valorTP + valorTV

    document.getElementById("resultado").innerHTML = 
    `O total de vendas a vista é R$${valorTV},00 <br>
    O total de vendas a prazo é R$${valorTP},00 <br>
    O valor total de vendas é de R$${total},00 <br>
    O valor da soma das primeiras parcelas é de R$${primeiraP},00`

}
function ex7(){
    let peso, altura, idade
    let qtdeIdadeSuperior50 = 0
    let qtdeIdadeEntre10e20 = 0
    let somaAltura = 0
    let qtdePesoMenor40 = 0
    for(let i=1;i<=5;i++){
        altura = Number(prompt('Informe a altura'))
        peso = Number(prompt('Informe o peso'))
        idade = Number(prompt('Informe a idade'))
        if (idade > 50){
            qtdeIdadeSuperior50++
        }
        else if (idade >=10 && idade <= 20){
                qtdeIdadeEntre10e20++
                somaAltura = somaAltura + altura
        }
        if (peso < 40){
            qtdePesoMenor40++
        }
    }
    alert(`Qtde de pessoas com idade superior a 50 anos ${qtdeIdadeSuperior50}`)
    alert(`Média das alturas das pessoas com idade entre 10 e 20 anos ${somaAltura/qtdeIdadeEntre10e20}`)
    alert(`Qtde de pessoas com peso inferior a 40 quilos ${qtdePesoMenor40}`)
}
function ex8(){
    let idade, peso, altura, olhos, cabelos
    let idadeP = 0
    let cont1 = 0
    let media150 = 0
    let cont2 = 0
    let azulP = 0
    let ruivoA = 0

    for(let i=1;i<=6;i++){
        idade = Number(prompt('Informe a idade'))
        peso = Number(prompt('Informe o peso'))
        altura = Number(prompt('Informe a altura'))
        do {
            olhos = prompt('Informe cor dos olhos: A, P, V, C').toUpperCase()
        }
        while (olhos != 'A' && olhos != 'P' && olhos != 'V' && olhos != 'C')
        do {
            cabelos = prompt('Informe cor dos cabelos: P, C, L, R').toUpperCase()
        }
        while (cabelos != 'P' && cabelos != 'C' && cabelos != 'L' && cabelos != 'R')

        if (idade > 50){
            if (peso < 60){
                idadeP++
            }
        }

        if (altura < 1.50){
            cont1++
        }

        if (olhos == "A"){
            cont2++
        }

        if (cabelos == "R"){
            if (olhos != "A")
                ruivoA++
        }
    }

    media150 = cont1/6

    azulP = (cont2*6)/100

    alert(`Qtde de pessoas com idade superior a 50 anos e peso inferior a 60kg é ${idadeP}`)
    alert(`Média de pessoas com altura com menos de 1,50m é ${media150}`)
    alert(`A porcentagem de pessoas com olhos azuis é de ${azulp}%`)
    alert(`A qtde de pessoas ruivas sem olhos azuis é de ${ruivoA}`)

}
function ex9(){
    let idade, peso, altura
    let somaId = 0
    let mediaId
    let qtde = 0
    let cont = 0
    let porcP

    for(let i=1;i<=10;i++){
        idade = Number(prompt('Informe a idade'))
        peso = Number(prompt('Informe o peso'))
        altura = Number(prompt('Informe a altura'))
        
        somaId = somaId + idade

        if (peso>90){
            if (altura<1.50){
                qtde++
            }
        }

        if (idade >10 && idade < 30){
            if (altura > 1.90){
                cont++
            }
        }

    }

    mediaId = somaId/10

    porcP = (cont*10)/100

    alert(`A media das soma das idades é de ${mediaId}`)
    alert(`A qtde de pessoas acima de 90kg com menos de 1.50. de altura é de ${qtde}`)
    alert(`A porcentagem de pessoas com idade de 10 á 30, com mais de 1.90m é de ${porcP}%`)
}   
function ex10(){
    let soma = 0
    let divi = 0    
    let somaP = 0
    for(let i=1;i<=10;i++){
        
        num = Number(prompt('Digite um numero:'))
        
        if (num % 2 == 0){
            soma = soma + num
        }
        
        for (let cont=1; cont<=num; cont++){            
            if(num % cont == 0){
                divi++
            }
        }

        if(divi == 2){
            somaP = somaP + num
        }       
    }

    alert (`A soma dos numeros pares é ${soma}, e a soma dos primos é ${somaP}`)

}