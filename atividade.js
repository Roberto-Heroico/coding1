var prompt = require('prompt-sync')();
 
 //1

nome="Roberto.Neto"
console.log(nome)
idade=18
console.log(idade)
mensagem= "Olá, meu nome é Roberto.Neto e tenho 18 anos"
console.log(mensagem)



//2
nome = "Roberto"
cidade = "recife"
variavel = (nome + " é de " + cidade)
console.log (variavel)




//3
const num1=4
const num2=4

const soma = (num1 + num2)
console.log(soma)

const subtrair =(num1 - num2)
console.log(subtrair)

const multiplicar =(num1 * num2)
console.log(multiplicar)

const dividir =(num1 / num2)
console.log(dividir)



//4
base = 14
altura = 12
area = (base * altura / 2)
console.log(area)



//5
_1_nota = (7)
_2_nota = (6)
_3_nota = (8)

media = (_1_nota + _2_nota + _3_nota ) / 3
console.log("a media é " + media) 



//6
preço = 800
desconto = 20
calculo = (800 * 0.20)
calculo2 = (800 - 160)
console.log(calculo)
console.log(calculo2)

//7
let preco = parseFloat(prompt('Valor do produto é?'))
var imposto =(10)

imposto_de_renda =(preco*imposto)/100
console.log(`imposto de renda.valor ser pago é ${imposto_de_renda}`)


// 8
let Dolares = parseFloat(prompt('Quantos dolares voce quer converter '))
var Reais = (5.47)

convercao = (Dolares*Reais)
console.log(`.conversor de moedas.este valor é ${convercao}`)





//9
Celsius = 30
Fahrenheit = (30 * 9/5 ) + 32
console.log("o clima está a " +Fahrenheit + " Fahrenheit")



//10
peso = 56.80
altura = 1.70
IMC =  peso / (altura * altura)
console.log(IMC)


 
/*###############################################################################*/