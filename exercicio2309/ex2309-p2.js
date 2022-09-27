var vetDez = []
const quantDez = 10

for(let u = 1; u<=quantDez;u++){
  vetDez.push(Number(prompt('Insira 10 numeros')))
}


const functionNegativo = n => n < 0
const functionPositivo = n=> n >=0
const arrayPositivo = vetDez.filter(functionPositivo)
const arrayNegativo = vetDez.filter(functionNegativo)

var soma = 0

for(let v = 0;v < arrayPositivo.length;v++){
    soma += arrayPositivo[v]
}

alert(`Os numeros escolhidos foram ${vetDez}`)
alert(`Os numeros negativos são ${arrayNegativo}`)
alert(`A quantidade de numeros negativos é ${arrayNegativo.length}`)
alert(`Os numeros positivos são ${arrayPositivo}`)
alert(`A quantidade de numeros positivos é ${arrayPositivo.length}`)
alert(`a soma dos numeros positivos é ${soma}`)
