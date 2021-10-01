entrada = [1, 3, 2, 4, 5, 1]

conj = set()
rep = set()

for i in entrada:
    if i in conj:
        rep.add(i)
    else:
        conj.add(i)

print(rep)
