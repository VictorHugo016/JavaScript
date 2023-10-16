let vetor = [];

for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    vetor.push(numero);
}

let posicoes30 = [];

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === 30) {
        posicoes30.push(i);
    }
}

if (posicoes30.length > 0) {
    console.log("Elementos iguais a 30 encontrados nas posições: " + posicoes30.join(", "));
} else {
    console.log("Nenhum elemento igual a 30 encontrado no vetor.");
}
