import random
import sys
import os

super_heroes = {'One': 'SnowBlack',
                'Two': 'CinderCarla',
                'Three': 'BeautyBeast'}
# print(super_heroes['Two'])

super_heroes['Two'] = 'CinderCarlo'
# print(super_heroes)
# print(len(super_heroes))

# print(super_heroes.get('Two'))
# print(super_heroes.keys())
# print(super_heroes.values())


# Here is a function that takes a value and returns the first key that maps to that value:
def reverse_lookup(d, v):
    for k in d:
        if d[k] == v:
            return k
    raise LookupError()


# print(reverse_lookup(super_heroes, 'cinder'))
print(reverse_lookup(super_heroes, 'CinderCarlo'))
