class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.ultimo = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.ultimo:
            self.ultimo = item

    def __str__(self):
        string = "{"
        for index, in_set in enumerate(self.set):
            if in_set:
                string += str(index)
                if index < self.ultimo:
                    string +=", "
        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjuntoB):
        novo_conjunto = Conjunto()

        for i in range(1001):
            if self.set[i] or conjuntoB.set[i]:
                novo_conjunto.add(i)
        return novo_conjunto

    def intersection(self, conjuntoB):
        novo_conjunto = Conjunto()

        for i in range(1001):
            if self.set[i] and conjuntoB.set[i]:
                novo_conjunto.add(i)
        return novo_conjunto

if __name__ == "__main__":
    conj = Conjunto()
    for item in [0, 10, 100, 1000]:
        conj.add(item)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    for i in [1, 2, 3]:
        conj4.add(i)
    print(conj4)
    print(1 in conj4)
    print(0 in conj4)

    conj5 = Conjunto()
    for i in range(1, 11):
        conj5.add(i)

    conj6 = Conjunto()
    for i in range(10, 21):
        conj6.add(i)

    conj7 = conj5.union(conj6)
    print(conj7)

    conj8 = Conjunto()
    for i in [1, 2, 3]:
        conj8.add(i)

    conj9 = Conjunto()
    for i in [7, 2, 10]:
        conj9.add(i)
    
    conj10 = conj8.intersection(conj9)
    print(conj10)
