let matriculasLogica = [];

for (let i = 0; i < 15; i++) {
    let matricula = parseInt(prompt(`Digite a matrícula do aluno que cursa lógica (${i + 1}/15):`));
    matriculasLogica.push(matricula);
}

let matriculasProgramacao = [];

for (let i = 0; i < 10; i++) {
    let matricula = parseInt(prompt(`Digite a matrícula do aluno que cursa programação (${i + 1}/10):`));
    matriculasProgramacao.push(matricula);
}

let matriculasComuns = [];

for (let matricula of matriculasLogica) {
    if (matriculasProgramacao.includes(matricula)) {
        matriculasComuns.push(matricula);
    }
}

if (matriculasComuns.length > 0) {
    console.log("Matrículas dos alunos que cursam ambas as disciplinas: " + matriculasComuns.join(", "));
} else {
    console.log("Nenhum aluno cursa ambas as disciplinas.");
}
