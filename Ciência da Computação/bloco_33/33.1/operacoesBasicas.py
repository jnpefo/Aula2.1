# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.

a = 10
b = 5

soma = a + b
subtracao = a - b
mutiplicacao = a * b
divisao = a / b
dInteira = a // b
portenciacao = a ** b
modulo = a % b

print(soma)
print(subtracao)
print(mutiplicacao)
print(divisao)
print(dInteira)
print(portenciacao)
print(modulo)


# Exercício 2: Declare e inicialize uma variável: hours = 6 . Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

hours = 6

minutes = hours * 60
seconds = minutes * 60

print(minutes)
print(seconds)

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.

teste = 1;
print(teste);

# Exercício 4: Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.


livro = 24.20
desconto = 40
taxaTransporte = 3
adcional = 0.75
copias = 59

total = ((livro*desconto)/100)+taxaTransporte+(3.75*copias)

print(total)
