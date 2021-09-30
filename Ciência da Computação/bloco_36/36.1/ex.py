# Exercício 1: Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?

def mutiply_array(numbers):
    result = 0
    for number in numbers:
        result *= number
    return result

# print(mutiply_array([1,2,3,5,4,6,8]))


# Exercício 2: Para desembaraçar a sopa de letrinhas que a seção anterior criou, meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!


# Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³) !
# Se tiver dificuldades, nos procure!

def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


# Usar 1000 aqui vai ser muito lento!
meu_array = list(range(1, 200))
# multiply_arrays(meu_array, meu_array, meu_array)


# Exercício 4: Imagine que você recebe dois arrays de tamanho igual, array1 e array2 . Para cada elemento do array1 , realize uma busca binária no array2 . Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n) , ou O(n log n) .
# 💡 Não precisa implementar o código aqui!

# R: Se cada busca binária tem uma complexidade O(log n) e fazemos n buscas, sendo cada uma nessa complexidade, a complexidade final é O(n * log n) .


# Vemos que existem algoritmos dos seguintes tipos:
# Constantes: O(1) ;
# Logarítmicos: O(log n) ;
# Linear: O(n) ;
# Quadráticos: O(n²) ;
# Cúbicos: O(n³) ;
# Exponencial: O(2ⁿ) ;
# Fatorial: O(n!) .
#em algoritmos de força bruta, são chamados NP Completo
