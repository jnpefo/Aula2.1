def sum(a, b):
  return a + b


def pot(a, b):
  return a ** b


print(sum(2, 2))
print(pot(2, 3))

import random

random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
guess = ""

while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

print("O número sorteado era: ", guess)
