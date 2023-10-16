let nomesProdutos = [];

let codigosProdutos = [];

let precosProdutos = [];

for (let i = 0; i < 10; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º produto:`);
    nomesProdutos.push(nome);

    let codigo = parseInt(prompt(`Digite o código do ${i + 1}º produto:`));
    codigosProdutos.push(codigo);

    let preco = parseFloat(prompt(`Digite o preço do ${i + 1}º produto:`));
    precosProdutos.push(preco);
}

function calcularNovoPreco(codigo, preco) {
    if (codigo % 2 === 0 && preco > 1000) {
        return preco * 1.20; 
    } else if (codigo % 2 === 0) {
        return preco * 1.15; 
    } else if (preco > 1000) {
        return preco * 1.10; 
        } else {
        return preco; 
    }
}

console.log("Relatório de Produtos com Aumento:");

for (let i = 0; i < 10; i++) {
    let novoPreco = calcularNovoPreco(codigosProdutos[i], precosProdutos[i]);

    if (novoPreco !== precosProdutos[i]) {
        console.log(`Nome: ${nomesProdutos[i]}, Código: ${codigosProdutos[i]}, Preço Original: R$ ${precosProdutos[i].toFixed(2)}, Novo Preço: R$ ${novoPreco.toFixed(2)}`);
    }
}
