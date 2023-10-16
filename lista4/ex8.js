const nomesAlunos = [];
const mediasFinais = [];
let alunoMaiorMedia = '';
let maiorMedia = -1;
let menorMedia = Number.MAX_VALUE;

for (let i = 0; i < 7; i++) {
  const nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
  const nota1 = parseFloat(prompt(`Digite a primeira nota de ${nome}:`));
  const nota2 = parseFloat(prompt(`Digite a segunda nota de ${nome}:`));
  const mediaFinal = (nota1 + nota2) / 2;

  nomesAlunos.push(nome);
  mediasFinais.push(mediaFinal);

  if (mediaFinal > maiorMedia) {
    maiorMedia = mediaFinal;
    alunoMaiorMedia = nome;
  }
  if (mediaFinal < menorMedia) {
    menorMedia = mediaFinal;
  }
}

console.log(`O aluno com a maior média é: ${alunoMaiorMedia} com média ${maiorMedia.toFixed(2)}`);

console.log('Notas necessárias para os alunos não aprovados na prova final:');
for (let i = 0; i < 7; i++) {
  if (mediasFinais[i] < 7) {
    const notaNecessaria = (5 - 0.6 * mediasFinais[i]).toFixed(2);
    console.log(`${nomesAlunos[i]} precisa tirar ${notaNecessaria} na prova final.`);
  }
}