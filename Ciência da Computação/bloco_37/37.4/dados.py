def dados_setes(rodadas):
    antes = set()
    lista = []

    for rodada in rodadas:
        if rodada7 in antes:
            lista.append((rodada7, rodada))
            antes.discard(rodada7)
        else:
            antes.add(rodada)
    return lista

if __name__ == '__main__':
    dado = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]
    print(dados_setes(dado))
