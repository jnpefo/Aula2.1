# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def maior_valor(n1, n2):
    if n1 > n2:
        return n1
    return n2

print(maior_valor(2, 5))

## ouuu
def maior(n1, n2):
    return max(n1, n2)

print(maior(2, 5))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def average(list):
    result = 0
    for number in list:
        result += number
        return result / len(list)

print(average([1, 5]))

from functools import reduce
def media(list):
    return reduce(lambda total, atual: total + atual, list) / len(list)

print(media([1, 5]))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def asteriscos(n):
    for number in range(0, n):
        print(n * "*")

asteriscos(5)

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.

nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
comprar = ''

for nome in nomes:
    if(len(comprar) < len(nome)):
      comprar = nome

print(comprar)

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

metros = 40

def latas_preco(metros):
    preco = 80
    litros = metros / 3
    latas = litros // 18
    if(litros % 18):
        latas += 1
    return latas, latas*preco

latas_preco(metros)

import math

def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price

print(paint_costs(90))

# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
# 🦜 Dica:
#   Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

lado1 = 3
lado2 = 3
lado3 = 3

def triangulo(lado1, lado2, lado3):
    is_triangle = (
            lado1 + lado2 > lado3 and
            lado2 + lado3 > lado1 and
            lado1 + lado3 > lado2
    )
    if not is_triangle:
        return "não é triângulo"
    elif lado1 == lado2 == lado3:
        return "equilátero"
    elif lado1 == lado2 or lado2 == lado3 or lado1 == lado3:
        return "isósceles"
    else:
        return "escaleno"

triangulo(lado1, lado2, lado3)