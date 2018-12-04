sample = [1, 2, 4, 6, 3, 7, 8]

missingnumber = [
    sorted(sample)[i]+1 for i in range(len(sample)-1) if sorted(sample)[i+1]-sorted(sample)[i] != 1]

# print(missingnumber[0])

# based on sum

from functools import reduce


def missingNumber(array):
    n = len(array)+1
    total = n*(n+1)/2
    z = total - reduce(lambda x, y: x+y, array)
    return int(z)

# print(missingNumber(sample))

# based on XOR
# 1) XOR all the array elements, let the result of XOR be X1.
#   2) XOR all numbers from 1 to n, let XOR be X2.
#   3) XOR of X1 and X2 gives the missing number.

sample2 = [4, 2, 1, 6, 3, 7, 8]


def getMissingNo(a, n):
    x1 = a[0]
    x2 = 1
    for i in range(1, n):
        x1 = x1 ^ a[i]
    for i in range(2, n+2):
        x2 = x2 ^ i
    return x1 ^ x2


getMissingNo(sample2, 7)
