const vetor = new Array(10);

for (let i = 0; i < 10; i++) {
  vetor[i] = parseFloat(prompt(`Digite o ${i + 1}º número:`));
}

let quantidadeNegativos = 0;
let somaPositivos = 0;

for (const numero of vetor) {
  if (numero < 0) {
    quantidadeNegativos++;
  } else if (numero > 0) {
    somaPositivos += numero;
  }
}
console.log(`Quantidade de números negativos: ${quantidadeNegativos}`);
console.log(`Soma dos números positivos: ${somaPositivos}`);