alert(`Programa para calculo do IMC`)
const altura = parseFloat(prompt(`Insira sua altura em metros`))
const peso = parseFloat(prompt(`Insira seu peso`))
const IMC = peso/(altura)**2
alert (`Seu iMC é ${IMC}`)
if(IMC<=18.5){
    alert(`Voce esta abaixo do peso`)
}else if(IMC > 18.5 && IMC < 25){
    alert(`Você esta com o peso normal`)
}else if(IMC>25 && IMC<30){
    alert(`Você esta acima do peso`)
}else if(IMC>=30){
    alert(`Você esta obeso`)
}