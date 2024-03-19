
function subtrair(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value

    let result= n1-n2

    document.getElementById("resultado").innerHTML = 
    `O resultado da subtração é ${result.toFixed(2)}`
}

function multiplicar(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value
    let n3 = document.getElementById("N3").value

    let result = n1*n2*n3

    document.getElementById("resultado").innerHTML = 
    `O resultado da multiplicação é ${result.toFixed(2)}`    
}

function dividir(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value

    let result= n1/n2

    document.getElementById("resultado").innerHTML = 
    `O resultado da divisão é ${result.toFixed(2)}`
}

function mediaPonderada(){
    let n1 = document.getElementById("N1").value
    let n2 = document.getElementById("N2").value

    let result= ((n1*2)+(n2*3))/5

    document.getElementById("resultado").innerHTML = 
    `A sua media é ${result.toFixed(2)}`
}

function pr(){
    let pr = Number(document.getElementById("N1").value)
    let nv = pr*0.90

    document.getElementById("resultado").innerHTML = 
    `O novo valor do item é ${nv.toFixed(2)}`
}

function calculoSalario(){
    let sl = Number(document.getElementById("N1").value)
    let vendas = Number(document.getElementById("N2").value)
    let comissão = vendas * 0.04  
    let salarioF = sl + comissão

    document.getElementById("resultado").innerHTML =
    `O valor da comissão é ${comissão.toFixed(2)}, e o salario final é ${salarioF}`

}

function peso(){
    let peso = Number(document.getElementById("N1").value)
    let pMenor = peso * 0.80
    let pMaior = peso * 1.15

    document.getElementById("resultado").innerHTML =
    `O seu peso 15% acima é ${pMaior.toFixed(2)}, o seu peso 20% abaixo é ${pMenor.toFixed(2)}`

}

function pesoG(){
    let peso = Number(document.getElementById("N1").value)
    let pesoG = peso*1000
    

    document.getElementById("resultado").innerHTML =
    `O seu peso em gramas é ${pesoG}`

}

function areaT(){
    let bMenor = Number(document.getElementById("N1").value)
    let bMaior = Number(document.getElementById("N2").value)
    let alt = Number(document.getElementById("N3").value)
       
    let area = ((bMaior+bMenor)*alt)/2
    
    document.getElementById("resultado").innerHTML =
    `A area do trapezio é ${area}`

}

function areaQ(){
    let lado = Number(document.getElementById("N1").value)
       
    let area = lado*lado
    
    document.getElementById("resultado").innerHTML =
    `A area do quadrado é ${area}`
    
}