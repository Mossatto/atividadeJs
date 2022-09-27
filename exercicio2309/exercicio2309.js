
var vetSix = []
const quant = 6

for(let i = 1; i<=quant;i++){
  vetSix.push(parseInt(prompt('insira seis elementos numéricos')))
}

alert(`Os números escolhidos foram ${vetSix}`)
const functionPar = n => n % 2 ===0
const functionImpares = i => i % 2 ==! 0
const arrayPar = vetSix.filter(functionPar)
const arrayImpar = vetSix.filter(functionImpares)
const quantImpares = (vetSix.length)-(arrayPar.length)
alert(`Os números pares são ${arrayPar}`)
alert(`A quantidade de pares é ${arrayPar.length}`)
alert(`Os numeros ímpares são ${arrayImpar}`)
alert(`A quantidade de impares é ${quantImpares}`)


