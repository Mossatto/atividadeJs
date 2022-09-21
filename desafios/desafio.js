const precoProduto = parseFloat (prompt('Qual o preço do produto?'))
const mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro.
Digite 2 para pagamento em cheque.
Digite 3 para pagamento em cartão.
`
const metodoDePagamento = prompt(mensagem)

console.log(precoProduto)
console.log(metodoDePagamento)

if(metodoDePagamento == 1 || metodoDePagamento ==2){
    const precoFinal = precoProduto * 0.9
    alert(`O preço final é ${precoFinal.toFixed(2)} reais`)
}
else if(metodoDePagamento == 3){
    const parcelas = parseInt(prompt('informe a quantidade de parcelas'))
    if(parcelas ==1){
        const precoFinal = precoProduto * 0.85
        alert(`O preço final é ${precoFinal.toFixed(2)} reais`)
    }else if(parcelas == 2){
        alert(`O preço final de pagamento é ${precoProduto} reais`)
    }else if(parcelas >= 3){
        const precoFinal = precoProduto * 1.1
        alert(`O preço final é ${precoFinal.toFixed(2)} reais`)
    }
}

