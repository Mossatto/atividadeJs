//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.//
alert('Programa para calculo de área e perímetro de um retangulo')
let base = number(prompt('Insira um valor referente a base'))
let altura = number(prompt('insira um valor referente a altura'))
let areaRetangulo = base * altura
let perimetroRetangulo = 2*base + 2*altura
alert('A area referente ao retangulo é ' + areaRetangulo)
alert('O perimetro do retângulo é ' + perimetroRetangulo)

