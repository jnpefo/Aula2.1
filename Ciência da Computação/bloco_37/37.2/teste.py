def has_dupes(lista):
    lista.sort()
    for item, outro in zip(lista[:-1], lista[1:]):
        if item == outro:
            return True
    return False
