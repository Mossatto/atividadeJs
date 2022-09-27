 
 let quant = 'Insira a qutidade de números'

 let quantN = parseInt(prompt(quant))

 while(isNaN(quantN) || quantN == 0){
    alert(`O programa só aceita números diferentes de zero`)
    quantN = parseInt(prompt(quant))
  }

 var arr = []
 for(let i = 1; i<=quantN; i++){
 arr.push(parseInt(prompt('insira um numero')))
}

var soma = 0

for(let v = 0;v < arr.length;v++){
    soma += arr[v]
}

var media = soma/(arr.length)

alert(`A soma entre os números é ${soma}`)

alert(`A media entre os números é ${media}`)