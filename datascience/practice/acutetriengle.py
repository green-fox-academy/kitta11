import itertools
import math


def isitacute(n):
    absides = list(itertools.product(range(n), range(n)))
    results = []
    for item in absides:
        c2 = (item[0]**2+item[1]**2)-1
        if c2 > 0:
            c = math.sqrt(c2)
            if c < n and c % int(c) == 0 and (item[0]+item[1]+int(c)) <= n and item[0] <= item[1] and item[1] <= c:
                results.append((item[0], item[1], int(c)))
    print(len(results))


for i in range(int(input())):
    isitacute(int(input()))
