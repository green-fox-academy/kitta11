import random
import sys
import os

for x in range(0, 10):
    print(x, ' ', end='')


grocery_list = ['potato', 'ice-cream', 'beer', 'banana']
for y in grocery_list:
    print(y)

total = 0

for z in [2, 4, 6, 8]:
    total = total+z
    print(total)
print(total)

num_list = [[2, 4, 6], [20, 40, 60], [200, 400, 600]]

for x in range(0, 3):
    for y in range(0, 3):
        print(num_list[x][y])

