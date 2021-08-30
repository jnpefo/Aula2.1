restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

for index in range(5):
    print(index)


min_rating = 3.0
filtered_restaurants = [
    restaurant
        for restaurant in restaurants
            if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D
##por não deu o append? linst comprehension
# Isto é equivalente às operações de map e filter em JavaScript.


n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

    # last, next = next, last + next // explicar melhor

# Exercício 13: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5 . Escreva um código que calcule o fatorial de um número inteiro.

number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
print(result)
# ou
number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number + 1):
    result *= factor
print(result)


# Exercício 14: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .
# Experimente utilizar a sintaxe de compreensão de listas.

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for ajust in ratings:
    new_ratings.append(ajust * 10)

print(new_ratings)

# Exercício 15: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

for rating in ratings:
    if (rating % 3) == 0:
        print(f"{rating} é múltiplo de 3")
