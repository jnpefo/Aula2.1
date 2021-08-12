from functools import reduce

# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def maior_valor(n1, n2):
    if n1 > n2:
        return n1
    return n2


print(maior_valor(2, 5))


def maior(n1, n2):
    return max(n1, n2)


print(maior(2, 5))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


# def average(*list):
#     result = 0
#     for number in numbers:
#         result += number
#         return result // len(number)


# print(average(1, 5))


def media(*list):
    return reduce(lambda total, atual: total + atual, list) / len(list)


print(media(1, 5))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def asteriscos(n):
    for number in range(0, n):
        print(n * "*")


asteriscos(5)


nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

comprar = ''

for nome in nomes:
  if len(nome) > len
