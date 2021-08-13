# Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número';
# Ex: 3 -> [1, 2, "Fizz"] .

input_lista = int(input("Qual o tamanho da sua lista?: "))
print("\n")
# a = list(int(num) for num in 
    # input("Insira com lista com espaço: ").strip().split())[:input_lista]

a = []
for num in range(input_lista):
    a.append(int(input("Insira um numero: ")))

# x = input("Digite uma lista: ")
# y = x.split(" ")

# a = [int(i) for i in y]

def fizzbuzz(n):
    numbers = []
    for number in n:
        if number % 15 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers

print(fizzbuzz(a))
