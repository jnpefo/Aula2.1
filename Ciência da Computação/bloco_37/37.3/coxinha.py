def coxinha(str):
    count = {}
    for char in str:
        if char not in count:
            count[char] = 1
        else:
            count[char] += 1
    return count

print(coxinha("coxinha"))
