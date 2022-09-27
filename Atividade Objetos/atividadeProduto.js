
var produtos = []
var produto = {
    nome:'' ,
    marca:'',
    quantidade:'',
    preco:'',
    img:'',
}
const quant = 15

for(i=1; i<=quant; i++){
    produto.nome = prompt(`Insira o nome do produto ${i}`)
    produto.marca = prompt(`Insira a marca do produto ${i}`)
    produto.quantidade = Number( prompt(`Insira a quantidade do produto ${i}`))
    produto.preco = Number(prompt(`Insira o preço do produto {i}`))
    produto.img = prompt(`Insira um link do produto ${i}`)
    produtos.push = (produto)


    document.write(`<p>O nomes dos produtos são ${produto.nome}</p>`)
}
