var numero = Number(prompt(`Insira um numero que deseja calcular o fatorial`))
var fatorial = numero
for(i = 1; i<numero; i++){
 fatorial *= i
}
alert(fatorial)