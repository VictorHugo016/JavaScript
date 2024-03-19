let codigos = []
let estoque = []

for(let i=0;i<10;i++){
    codigos.push(Number(prompt(`Informe o código do produto ${i+1}`)))
    estoque.push(Number(prompt(`Informe a quantidade em estoque do produto ${i+1}`)))
}

let cliente = Number(prompt(`Informe o código do cliente que deseja comprar`))
do {
    let produto = Number(prompt(`Informe o código do produto que deseja comprar`))
    let qtde = Number(prompt(`Informe a quantidade que deseja comprar`))
    
    let achou = false 
    for(let i=0;i<10;i++){
        if (codigos[i] == produto){ 
            achou = true 
            if (estoque[i] >= qtde){ 
                alert(`Venda realizada com sucesso`)
                estoque[i] = estoque[i] - qtde 
            }
            else {
                alert(`Não tem estoque suficiente`)
            }
        }
    }
    if (!achou){ 
        alert(`Produto não encontrado`)
    }
    cliente = Number(prompt(`Informe o código do novo cliente ou 0 para encerrar`))
}
while(cliente != 0)

for(let i=0;i<10;i++){
    console.log(`Produto ${codigos[i]} tem ${estoque[i]} unidades em estoque`)
}