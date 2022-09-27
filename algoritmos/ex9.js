alert(`Programa para calculo de valor de multa de velocidade`)
var velocidade = Number(prompt(`Insira a velocidade que o senhor passou`))
const velocidadePermitida = Number(50)

if(velocidade <= velocidadePermitida + 10 && velocidade > velocidadePermitida){
    alert(`O valor da multa é 50 reais`)
}else if(velocidade >= velocidadePermitida + 11 && velocidade <= velocidadePermitida + 30 ){
    alert(`O valor da sua multa é 100 reais`)
}else if(velocidade >= velocidadePermitida + 31){
    alert(`O valor da sua multa é 200 reais`)
}else{
    alert(`Voce esta dentro da velocidade permitida`)
}