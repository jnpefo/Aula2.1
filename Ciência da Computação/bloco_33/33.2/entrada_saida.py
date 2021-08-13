# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:

nome = input("Digite seu nome: ")

for index in nome:
    print(index)

# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input , solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit , embutido no tipo str , pode ser utilizado para verificar se a string corresponde a um número natural.

numeros = input("Insira valores separados por espaço: ")

numerosArr = numeros.split(" ")

sum = 0

for num in numerosArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, '{num}' não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")


# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre somente as pessoas que estão aprovadas, escrevendo seus nomes em outro arquivo. A nota miníma para aprovação é 6.

file = open("./arquivo.txt", mode="r")

print(file.read().split())

estudantes = []

with open("./arquivo.txt", mode="r") as arquivo:
    for index in arquivo:
        estudante = index
        estudante = estudante.split(" ")
        if int(estudante[1]) >= 6:
            estudantes.append(estudante[0] + "\n")


with open("aprovadas.txt", mode="w") as aprovadas:
    print(estudantes)
    aprovadas.writelines(estudantes)
