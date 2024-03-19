let vetor = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    vetor.push(numero);
}

let numerosPares = [];
let numerosImpares = [];

for (let num of vetor) {
    if (num % 2 === 0) {
        numerosPares.push(num);
    } else {
        numerosImpares.push(num);
    }
}

console.log(`Todos os números: ${vetor}`);

console.log(`Quantidade de números pares: ${numerosPares.length}`);
console.log(`Números pares: ${numerosPares}`);

console.log(`Quantidade de números ímpares: ${numerosImpares.length}`);
console.log(`Números ímpares: ${numerosImpares}`);
