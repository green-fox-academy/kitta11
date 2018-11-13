import math


def isit_squared(m):
    resultM = [pow(num, 2) for num in range(1, int(m/2)+1) if m % num == 0]
    resultM.append(pow(m, 2))
    if math.sqrt(sum(resultM)) % int(math.sqrt(sum(resultM))) == 0:
        return(m, sum(resultM))


def list_squared(m, n):
    squared = []
    for num in range(m, n+1):
        resultM = [pow(numb, 2) for numb in range(1, num+1) if num % numb == 0]
        if math.sqrt(sum(resultM)) % int(math.sqrt(sum(resultM))) == 0:
            squared.append([num, sum(resultM)])
    return squared


# print(list_squared(1, 250))
# print(list_squared(42, 250))
# print(isit_squared(95, 97))
# print(isit_squared(246))
print(isit_squared(42))
