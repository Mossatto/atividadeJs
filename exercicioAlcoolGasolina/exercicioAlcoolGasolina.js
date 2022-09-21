alert(`Programa para calcular o desconto no preço do combustível`)
const mensagem = `Digite A caso o abastecimento tenha sido feito com alcool
Digite G caso o abastecimento tenha sido feito com gasolina`
const combustivel = prompt(mensagem).toUpperCase()
const litros = parseInt(prompt(`Insira a quantidade de litros do abastecimento`))
console.log(combustivel)
 if(combustivel == "A" && litros <=25){
    const precoAbastecimento = (litros*1.9)*0.98
    alert(`O valor do abastecimento com desconto é ${precoAbastecimento} reais`)
 }else if(combustivel == "A" && litros > 25){
    const precoAbastecimento = (litros*1.9)*0.96
    alert(`O valor do abastecimento com desconto é ${precoAbastecimento} reais`)
 }else if(combustivel == "G" && litros<=25){
    const precoAbastecimento = (litros*2.7)*0.97
    alert(`O valor do abastecimento com desconto é ${precoAbastecimento} reais`)
 }else if(combustivel == "G" && litros>25){
    const precoAbastecimento = (litros*2.7)*0.95
    alert(`O valor do abastecimento com desconto é ${precoAbastecimento} reais`)
 }