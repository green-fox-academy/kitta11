import random
import sys
import os


def addNumber(numberOne, numberTwo):
    sum = numberOne+numberTwo
    return sum


print(addNumber(34, 23))

print('what is your name')
name = sys.stdin.readline()
print('Hello', name)


# def forEach(list, function):
#     for i, v in enumerate(list):
#         function(v, i, list)


def multiply(item, index):
    return item*index


# print(forEach([2, 4, 6, 8, 9], multiply(v, i)))

testlist = [2, 4, 6, 8, 9]
print(enumerate(testlist))
# for i, v in enumerate(testlist):
#     print(i*v)
