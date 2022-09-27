alert(`Programa para checar se um ano é bissexto`)
var ano = parseInt(prompt(`Insira o ano que deseja checar`))

if(ano % 4 == 0 && ano % 100 != 0){
    alert('O ano é bissexto')
}else if(ano % 400 == 0){
    alert('o ano é bissexto')
}else{
    alert('o ano não é bissexto')
}