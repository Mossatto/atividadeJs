alert(`Programa para classificação de triangulos`)
var ladosTriangulo = []
const quant = 3

for(let i = 1; i<= quant; i++){
    ladosTriangulo.push(Number(prompt(`Insira os valores referentes aos lados do triangulo desejado`)))
}
 const ladosIguais = [...new Set(ladosTriangulo)]
 if(ladosIguais.length == 1){
    alert(`Triangulo equilátero`)
 }else if(ladosIguais.length==2){
    alert(`O triangulo é isosceles`)
 }else{
    alert(`O triangulo é escaleno`)
 }