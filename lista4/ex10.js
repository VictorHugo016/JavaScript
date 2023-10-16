let vetor1 = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    vetor1.push(numero);
}

let vetor2 = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro do segundo vetor:`));
    vetor2.push(numero);
}

let resultadoSoma = [];

let resultadoDivisores = [];

for (let numero of vetor1) {
    if (numero % 2 === 0) {
        let soma = numero + vetor2.reduce((acc, val) => acc + val, 0);
        resultadoSoma.push(soma);
    }
}

for (let numero of vetor1) {
    if (numero % 2 !== 0) {
        let divisores = vetor2.filter(val => numero % val === 0).length;
        resultadoDivisores.push(divisores);
    }
}

console.log("Vetor resultante da soma de números pares do primeiro vetor com o segundo vetor:");
console.log(resultadoSoma);

console.log("Vetor resultante da quantidade de divisores de números ímpares do primeiro vetor no segundo vetor:");
console.log(resultadoDivisores);
