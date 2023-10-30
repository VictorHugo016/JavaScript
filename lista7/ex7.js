// Definindo matrizes M e N
const M = [];
const N = [];

// Preenchendo a matriz M (4x6) com valores de exemplo
for (let i = 0; i < 4; i++) {
  const linhaM = [];
  for (let j = 0; j < 6; j++) {
    linhaM.push(Math.floor(Math.random() * 10)); // Preencha com valores aleatórios
  }
  M.push(linhaM);
}

// Preenchendo a matriz N (6x4) com valores de exemplo
for (let i = 0; i < 6; i++) {
  const linhaN = [];
  for (let j = 0; j < 4; j++) {
    linhaN.push(Math.floor(Math.random() * 10)); // Preencha com valores aleatórios
  }
  N.push(linhaN);
}

// Função para calcular a soma das linhas de M com as colunas de N
function calcularSomaLinhasColunas(matrizM, matrizN) {
  const resultado = [];

  for (let i = 0; i < matrizM.length; i++) {
    const linhaResultado = [];
    for (let j = 0; j < matrizN[0].length; j++) {
      let soma = 0;
      for (let k = 0; k < matrizM[0].length; k++) {
        soma += matrizM[i][k] * matrizN[k][j];
      }
      linhaResultado.push(soma);
    }
    resultado.push(linhaResultado);
  }

  return resultado;
}

// Imprimindo as matrizes M e N
console.log("Matriz M (4x6):");
for (let i = 0; i < 4; i++) {
  console.log(M[i]);
}

console.log("Matriz N (6x4):");
for (let i = 0; i < 6; i++) {
  console.log(N[i]);
}

// Calculando e imprimindo a soma das linhas de M com as colunas de N
const resultadoSoma = calcularSomaLinhasColunas(M, N);
console.log("\nResultado da soma das linhas de M com as colunas de N:");
for (let i = 0; i < resultadoSoma.length; i++) {
  console.log(resultadoSoma[i]);
}
