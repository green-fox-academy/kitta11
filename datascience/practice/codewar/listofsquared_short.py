import math


def list_squared(m, n):
    squared = []
    for num in range(m, n+1):
        divisors = [numb for numb in range(
            1, int(math.sqrt(num))+1) if num % numb == 0]
        otherpart = list(reversed(
            [int(num/numb) for numb in divisors if int(num/numb) not in divisors]))
        fullist = divisors+otherpart
        resultM = [pow(numb, 2) for numb in fullist]
        if math.sqrt(sum(resultM)) % int(math.sqrt(sum(resultM))) == 0:
            squared.append([num, sum(resultM)])
    return squared


# list_squared(1, 9)
print(list_squared(1, 250))
# print(list_squared(1, 250))
# print(list_squared(42, 250))
# print(list_squared(250, 400))
