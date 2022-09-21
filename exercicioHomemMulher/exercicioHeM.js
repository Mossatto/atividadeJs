alert(`Programa para calculo do peso ideal de uma pessoa`)
const mensagem = `Digite M caso seja mulher
Digite H caso seja homem`
const sexo = prompt(mensagem).toUpperCase()
const altura = parseFloat(prompt(`Digite sua altura em metros`))
if(sexo=="H"){
    const pesoIdeal = (altura*72.7)-58
    alert(`seu peso ideal é ${pesoIdeal}`)
}else if(sexo=="M"){
    const pesoIdeal = (62.1*altura)-44.7
    alert(`seu peso ideal é ${pesoIdeal}`)
}