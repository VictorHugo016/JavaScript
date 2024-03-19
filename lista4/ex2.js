let vetor = [];

for (let i = 0; i < 6; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número inteiro:`));
    vetor.push(i);
}

let multiplosDe2 = [];
let multiplosDe3 = [];
let multiplosDe2E3 = [];

for (let num of vetor) {
    if (num % 2 === 0) {
        multiplosDe2.push(num);
    }
    if (num % 3 === 0) {
        multiplosDe3.push(num);
    }
    if (num % 2 === 0 && num % 3 === 0) {
        multiplosDe2E3.push(num);
    }
}

console.log(`Números múltiplos de 2: ${multiplosDe2}`);

console.log(`Números múltiplos de 3: ${multiplosDe3}`);

console.log(`Números múltiplos de 2 e de 3: ${multiplosDe2E3}`);
