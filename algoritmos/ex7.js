alert(`Programa para realizar progressão geométrica`)
var num = Number(prompt(`Insira o numero base`))
var razao = Number(prompt(`Insira a razão somatória`))

var progressao =[]

for(let i = 1; i<=10;i++){
    progressao.push(num*(razao*i))
}
progressao.unshift(num)
alert(`A progressão geometrica do numero ${num} sob efeito da razão ${razao} é ${progressao}`)