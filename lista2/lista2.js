function IMC(){
   
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc;

    imc = peso / (altura*altura)

    let classificacao

    if (imc< 18.5){
        classificacao = "Magreza" 
    }
    else if (imc >= 18.5 && imc < 25){
        classificacao = "normal"
    }
    else if (imc >= 25 && imc < 29.9){
        classificacao = "sobrepeso"
    }
    else if (imc >= 30 && imc < 34.9){
        classificacao = "obesidade grau 1"
    }
    else if (imc >= 35 && imc < 29.9){
        classificacao = "obesidade grau 2"
    }
    else
        classificacao = "obesidade grau 3"
    
    
    document.getElementById("imc").innerHTML = 
    `Seu imc é de ${imc.toFixed(2)}, sua classificação no IMC é de ${classificacao}`
}

function ex5(){
    
    let a = Number(document.getElementById("N1").value)
    let b = Number(document.getElementById("N2").value)
    let opt = Number(document.getElementById("op").value)
    let resultado = null;
    
    switch(opt){
        case 1: resultado = (a+b)/2
                break
        
        case 2: if (a>=b){
                    resultado = a-b                
                }
                else
                    resultado = b-a
                break
        
        case 3:  resultado = a*b
                break        
        
        case 4: if (b != 0){
                    resultado = a/b
                }
                else 
                document.getElementById("resultado").innerHTML = 'Divisão por 0 não existe'
        
        default: document.getElementById("resultado").innerHTML ='Inválido'
        }

        if (resultado != null){
            document.getElementById("resultado").innerHTML = 
            `O resultado da opção escolhida é ${resultado}`
            
        }
} 

function ex23(){
    
    let cod = Number(document.getElementById("N1").value)
    let quant = Number(document.getElementById("N2").value)
    let pr 

    if (cod >= 1 && cod <=10){
        pr = 10
    }
    else if (cod >= 11 && cod <=20){
       pr = 15
    }
    else if (cod >= 21 && cod <= 30){
        pr = 20
    }
    else if (cod >= 31 && cod <= 40){
        pr = 30
    }
    else{
    document.getElementById("resultado").innerHTML = 'Código invalido'
    
    }    

    let prT = pr*quant
    let desc
    let aux
    if (prT < 250 ){
        desc = 5
        aux = 0.95
    }

    else if (prT > 250 && prT <500){
        desc = 10
        aux = 0.90
    }

    else if (prT > 500){
        desc = 15
        aux = 0.85
    }

    let prTD = prT*aux

    document.getElementById("resultado").innerHTML = 
    `O valor unitario do código é R$${pr} <br>
    Valor total da nota R$${prT} <br>
    O desconto aplicado é de ${desc}% <br>
    O valor final da nota é R$${prTD}`
}

function ex15(){
    
    let valor = Number(document.getElementById("N1").value)
    let opt = Number(document.getElementById("op").value)
    let aux = null
    let result = null;
    
    switch(opt){
        case 1: aux = valor * 0.03
                 result = valor + aux
                break
        
        case 2: aux = valor * 0.05
                result = valor + aux
                break
        
        default: document.getElementById("resultado").innerHTML ='Inválido'
        }

        document.getElementById("resultado").innerHTML = 
        `O valor investido apos 1 mês resulta em R$${result.toFixed(2)}`
            
} 

function ex16(){
    
    let cod = Number(document.getElementById("N1").value)
    let valor = Number(document.getElementById("N2").value)
    let aux = null
    let valorF = null

    if (valor <= 30 ){
       aux = 0
    }

    else if (valor > 30 && valor <= 100){
        aux = valor * 0.10
    }

    else if (prT > 100){
        aux = valor * 0.15
    }

    if (aux != 0){
        valorF = valor-aux
    }
    else{
        valorF = valor
    }
    document.getElementById("resultado").innerHTML = 
    `O valor do produto é R$${valorF}`
}

function ex17(){
    
    let senhaDigitada = Number(document.getElementById("N1").value)
    let senhaCorreta = Number(4531);

    if (senhaDigitada != senhaCorreta) {
        document.getElementById("resultado").innerHTML = "Senha incorreta. Acesso negado!"
    } 
    else {
        document.getElementById("resultado").innerHTML = "Acesso permitido! Bem-vindo!"
    }
}

function ex18(){
    
    let idade = Number(document.getElementById("N1").value)
    
    if (idade < 18) {
        document.getElementById("resultado").innerHTML = "Você é de menor!"
    } 
    else {
        document.getElementById("resultado").innerHTML = "Você é de maior!"
    }
}
function ex19(){
    
    let alt = Number(document.getElementById("N1").value)
    let opt = Number(document.getElementById("op").value)
    let gen = null
    let result = null;
    
    switch(opt){
        case 1: gen = "M"
                break
        
        case 2: gen = "F"
                break
        
        default: document.getElementById("resultado").innerHTML ='Inválido'
        }

        if (gen = "M"){
            result = (72.7*alt) - 58
        }
        else if (gen = "F"){
            result = (62.1*alt) - 44.7
        }


        document.getElementById("resultado").innerHTML = 
        `O seu peso ideal é ${result.toFixed(2)}kg!`
            
} 

function ex20(){
    let idade = Number(document.getElementById("N1").value)
    let categoria = null

    if (idade >= 5 && idade <=7){
        categoria = "infantil"
    }
    else if (idade >= 8 && idade <=10){
        categoria = "juvenil"
    }
    else if (idade >= 11 && idade <=15){
        categoria = "adolecente"
    }
    else if (idade >= 16 && idade <=30){
        categoria = "adulto"
    }
    else if (idade > 30){
        categoria = "sênior"
    }
    else{
        document.getElementById("resultado").innerHTML = 
        `Idade inferior que 5`
            
    }

    if (categoria != null){
    document.getElementById("resultado").innerHTML = 
    `O categoria dessa idade é a ${categoria}`
    }
}

function ex21(){
    
    let cod = Number(document.getElementById("N1").value)
    let valor = Number(document.getElementById("N2").value)
    let proc = null
    
    if (cod <= 1 && cod >0){
        proc = "sul"
    }
    else if (cod = 2){
        proc = "norte"
    }
    else if (cod = 3){
        proc = "leste"
    }
    else if (cod = 4){
        proc = "oeste"
    }
    else if (cod >= 5 && cod <= 6){
        proc = "nordeste"
    }
    else if (cod >= 7 && cod <= 9){
        proc = "sudeste"
    }
    else if (cod >= 10 && cod <= 20){
        proc = "centro-oeste"
    }
    else if (cod >= 21 && cod <= 30){
        proc = "nordeste"
    }
   else{
        document.getElementById("resultado").innerHTML = `Numero invalido`
   }
   if (proc != null){ 
        document.getElementById("resultado").innerHTML = 
        `O valor do produto é R$${valor}, sua procedencia é do ${proc}`
   }
}

function ex22(){
    let idade = Number(document.getElementById("N1").value)
    let peso = Number(document.getElementById("N2").value)
    let cl = null

    if(idade<20){
            if(peso < 60){
                cl = 9

            }
            else if(peso >= 60 && peso <= 90){
                cl = 8
            }
            else if(peso > 90){
                cl = 7
            }
    }
    else if(idade >=20 && idade <50){
            if(peso < 60){
                cl = 6
            }
            else if(peso >= 60 && peso <= 90){
                cl = 5
            }
            else if(eso > 90){
                cl = 4
            }

    }
    else if(idade > 50){
            if(peso < 60){
                cl = 3
            }
            else if(peso >= 60 && peso <= 90){
                cl = 2
            }
            else if(peso > 90){
                cl = 1
            }

    }

    if (cl != null){ 
        document.getElementById("resultado").innerHTML = 
        `O sua classificação é numero ${cl}`
    }
}
