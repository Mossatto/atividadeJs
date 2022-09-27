let resposta = true
while(resposta){
    let precoProduto = parseFloat (prompt('Qual o preço do produto?'))

    while(isNaN(precoProduto) || precoProduto<=0){
        alert('O preço do produto não está correto, por favor utilize apenas números.')
        precoProduto = parseFloat(prompt('Qual o preço do produto?'))
    }

    const mensagem = `
    Informe o método de pagamento:
    Digite 1 para pagamento em dinheiro.
    Digite 2 para pagamento em cheque.
    Digite 3 para pagamento em cartão.
    `
    let metodoDePagamento = parseInt(prompt(mensagem))

    while(metodoDePagamento > 3  || metodoDePagamento == 0 || isNaN(metodoDePagamento)){
        alert("insira apenas os valores especificados")
        metodoDePagamento = parseInt(prompt(mensagem))
    }

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
    
    var recalq = prompt(`Deseja fazer uma nova operação ? Digite S para sim e N para não`).toUpperCase()
    if(recalq=='S'){
        resposta= true
        console.clear()
    }else if(recalq=='N'){
        resposta=false
        alert("obrigo, aguardamos novas compras")
    }else if(recalq!== 'N'&& 'S'){
        resposta=false
        alert("operação inválida!!!")
        var recalq = prompt(`Deseja fazer uma nova operação ? Digite S para sim e N para não`).toUpperCase()
    }
}
