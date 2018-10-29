import random
import sys
import os

grocery_list = ['potato', 'ice-cream', 'beer', 'banana']
print('first item:', grocery_list[0])

grocery_list[0] = 'potatoes'
print('first item:', grocery_list[0])

print(grocery_list[1:3])

next_week_list = ['apples', 'cabbage', 'pear']

full_list = [next_week_list, grocery_list]
print(full_list)
print(full_list[0][2])

next_week_list.append('steak')
print(full_list)

next_week_list.insert(2, 'chicken')
print(full_list)

next_week_list.remove('pear')
print(full_list)

next_week_list.sort()
print(next_week_list)
next_week_list.reverse()
print(next_week_list)
del next_week_list[1]
print(next_week_list)

print(len(full_list))
print(max(next_week_list))
print(min(next_week_list))


