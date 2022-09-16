alert('Programa para calculo de volume de um cilindro')
let raio = prompt('insira o raio da lata de óleo')
let altura = prompt('insira a altura da lata de óleo')
const pi = 3.14
let areaDaBase = pi * (2*raio)
let volumeCilindro = areaDaBase * altura
alert('O volume da lata de óleo é ' + volumeCilindro)