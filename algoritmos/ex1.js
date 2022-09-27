var altura = []
const nAlunos = 15

for(let i =1; i <= nAlunos;i++){
    altura.push(Number(prompt(`Insira a altura ${i}`)))
}
var alturaCrescente = altura.sort((a,b) => a-b)
alert(`Os alunos possuem as seguintes alturas ${alturaCrescente.join(' m ->')}`)
alert(`A menor altura é ${altura[0]} m`)
alert(`A maior altura é ${altura[14]} m`)
